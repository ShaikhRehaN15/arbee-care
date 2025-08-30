import formidable from 'formidable';
import path from 'path';
import fs from 'fs';

const uploadDir = path.join(process.cwd(), 'public/uploads/reports');

// Ensure upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export default async function parseMultipartForm(req) {
  return new Promise((resolve, reject) => {
    const form = formidable({
      uploadDir,
      keepExtensions: true,
      allowEmptyFiles: false,
      multiples: false,
      filename: (name, ext, part) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const originalExtension = path.extname(part.originalFilename);
        return `${part.originalFilename.split('.')[0]}-${uniqueSuffix}${originalExtension}`;
      },
    });

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);

      // formidable's fields and files are arrays in recent versions
      const file = files.file ? files.file[0] : null;

      if (!file) {
        return reject(new Error('No file uploaded'));
      }
      // Convert fields arrays to single values for convenience if needed
      const singleFields = {};
      for (const key in fields) {
        singleFields[key] = fields[key][0];
      }

      resolve({ fields: singleFields, file });
    });
  });
}
