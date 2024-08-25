import { Feedback } from '../models/Feedback.js';

export const addFeedback = async (req, res) => {
  try {
    const { courseId, feedback } = req.body;
    const userId = req.user.id; // Assuming user ID is available in req.user

    const newFeedback = new Feedback({ courseId, userId, feedback });
    await newFeedback.save();

    res.status(201).json({ message: 'Feedback added successfully', feedback: newFeedback });
  } catch (error) {
    res.status(500).json({ message: 'Error adding feedback', error });
  }
};

export const getFeedback = async (req, res) => {
  try {
    const { courseId } = req.params;

    const feedbacks = await Feedback.find({ courseId }).populate('userId', 'name');
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feedbacks', error });
  }
};
