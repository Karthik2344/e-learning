import express from 'express';
import { getPayments } from '../controllers/payment.js';

const router = express.Router();

router.get('/payments', getPayments);

export default router;
