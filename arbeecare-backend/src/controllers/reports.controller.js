import Report from '../models/report.model.js';
import parseMultipartForm from '../utils/formidable.js';
import path from 'path';
import fs from 'fs';

export async function listReports(req, res) {
  try {
    const reports = await Report.find({}).sort({ createdAt: -1 });
    res.status(200).json(reports);
  } catch (error) {
    console.error('Error fetching reports:', error);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function uploadReport(req, res) {
  try {
    const { fields, file } = await parseMultipartForm(req);

    const newReport = await Report.create({
      title: fields.title || file.originalFilename,
      filePath: path.join('/uploads/reports', file.newFilename),
      uploadedBy: req.user._id, // User is from requireAuth middleware
    });

    res.status(201).json(newReport);
  } catch (error) {
    console.error('Error uploading report:', error);
    // Clean up uploaded file if DB save fails
    if (error.filepath) {
      fs.unlink(error.filepath, (err) => {
        if (err) console.error('Error deleting temp file on upload error:', err);
      });
    }
    res.status(500).json({ message: 'Error uploading file' });
  }
}

export async function deleteReport(req, res) {
  const { id } = req.params; // Get ID from URL parameters

  try {
    const report = await Report.findById(id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }

    // Delete file from disk
    const filePath = path.join(process.cwd(), 'public', report.filePath);
    fs.unlink(filePath, (err) => {
      if (err) console.error('Error deleting file from disk:', err);
    });

    await report.deleteOne();

    res.status(200).json({ message: 'Report deleted successfully' });
  } catch (error) {
    console.error('Error deleting report:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
