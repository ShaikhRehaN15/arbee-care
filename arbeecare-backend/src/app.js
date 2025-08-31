import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.use(morgan('dev'));

// Serve static files
app.use('/uploads/reports', express.static(path.join(__dirname, '..', 'public', 'uploads', 'reports')));
app.use('/uploads/enquiry_files', express.static(path.join(__dirname, '..', 'public', 'uploads', 'enquiry_files')));

app.use('/api', routes);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app;
