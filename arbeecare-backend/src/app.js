import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware

app.use(cors({
  origin: 'http://localhost:3000', // Next.js frontend
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.use(morgan('dev'));

// Serve static files from the 'public' directory
app.use('/uploads/reports', express.static(path.join(__dirname, '..', 'public', 'uploads', 'reports')));

// Routes
app.use('/api', routes);

// Error handling for unmatched routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app;

