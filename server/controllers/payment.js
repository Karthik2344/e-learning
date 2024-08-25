import { Payment } from '../models/Payment.js';

export const getPayments = async (req, res) => {
  console.log('Received request for payments');
  try {
    const payments = await Payment.find({});
    console.log('Fetched payments:', payments);
    res.json({ payments });
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ message: error.message });
  }
};
