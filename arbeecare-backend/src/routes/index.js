import express from 'express';
import reports from './reports.routes.js';
import auth from './auth.routes.js';
import enquiry from '../app/api/enquiry/route.js'; // <-- fix relative path

const router = express.Router();

router.use('/auth', auth);
router.use('/reports', reports);
router.use('/enquiry', enquiry);

export default router;
