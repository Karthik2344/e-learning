import express from 'express';
import { addFeedback, getFeedback } from '../controllers/feedback.js';
import { isAuth } from '../middlewares/isAuth.js'; // Assuming you have authentication middleware

const router = express.Router();

router.post('/feedback', isAuth, addFeedback);
router.get('/feedback/:courseId', getFeedback);

export default router;
