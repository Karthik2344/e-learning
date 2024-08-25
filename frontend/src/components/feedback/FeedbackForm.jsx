import React, { useState } from "react";
import axios from "axios";
import { server } from "../../main";
import toast from "react-hot-toast";
import "./feedbackForm.css";

const FeedbackForm = ({ courseId }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${server}/api/feedback`,
        { courseId, feedback },
        {
          headers: { token },
        }
      );
      toast.success("Feedback submitted successfully!");
      setFeedback("");
    } catch (error) {
      toast.error("Error submitting feedback.");
    }
  };

  return (
    <div className="feedback-form-container">
      <h3>Leave Your Feedback</h3>
      <form onSubmit={handleSubmit} className="feedback-form">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Leave your feedback"
          required
          className="feedback-textarea"
        />
        <button type="submit" className="feedback-submit-button">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
