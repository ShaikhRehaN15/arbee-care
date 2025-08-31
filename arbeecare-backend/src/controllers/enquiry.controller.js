import parseMultipartForm from '../utils/formidable.js'; // Re-use formidable for enquiry file uploads
import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

export async function submitEnquiry(req, res) {
  try {
    if (!process.env.GOOGLE_CREDENTIALS) {
      throw new Error('GOOGLE_CREDENTIALS not found in environment');
    }

    // Parse credentials JSON
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);

    // Replace escaped newlines with actual newlines
    credentials.private_key = credentials.private_key.replace(/\\n/g, '\n');

    const { fields, files } = await parseMultipartForm(req);

    console.log('Fields:', fields);
    console.log('Files:', files);

    // Authenticate with Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({
      version: 'v4',
      auth,
    });

    const timestamp = new Date().toISOString();

    // Prepare row data
    const rowData = [
      fields.name || '',
      fields.age || '',
      fields.sex || '',
      fields.address || '',
      files.address_proof ? files.address_proof.newFilename : 'N/A',
      fields.aadhaar || '',
      files.aadhaar_proof ? files.aadhaar_proof.newFilename : 'N/A',
      fields.aid_nature || '',
      fields.amount_figures || '',
      fields.amount_words || '',
      fields.aid_details || '',
      fields.applied_other || '',
      fields.organisation_url || '',
      fields.email || '',
      fields.topic_enquiry || '',
      fields.comments || '',
      timestamp,
    ];

    // Append row to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:A',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [rowData],
      },
    });

    res.status(200).json({ success: true, message: 'Enquiry submitted successfully' });
  } catch (error) {
    console.error('Error submitting enquiry:', error);

    // Cleanup uploaded files if fail
    if (req.files) {
      for (const fileKey in req.files) {
        const filePath = path.join(process.cwd(), 'public/uploads/enquiry_files', req.files[fileKey].newFilename);
        fs.unlink(filePath, (err) => {
          if (err) console.error('Error deleting uploaded file on enquiry error:', err);
        });
      }
    }
    res.status(500).json({ success: false, error: error.message });
  }
}




