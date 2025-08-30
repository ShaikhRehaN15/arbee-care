import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import app from './app.js';
import connectDB from './config/db.js';

// Resolve path to .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

console.log("GOOGLE_KEY_FILE:", process.env.GOOGLE_KEY_FILE); 

// Debug: check Mongo URI
console.log("Mongo URI:", process.env.MONGODB_URI);

// Connect to DB AFTER env is loaded
connectDB();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

