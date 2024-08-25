import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../main";
import { FaUserCircle } from "react-icons/fa";
import "./courseFeedback.css";

const CourseFeedback = ({ courseId }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const { data } = await axios.get(`${server}/api/feedback/${courseId}`);
        setFeedbacks(data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, [courseId]);

  return (
    <div className="feedback-display-container">
      <h3>Course Feedback</h3>
      <div className="feedback-items">
        {feedbacks.length ? (
          feedbacks.map((feedback) => (
            <div key={feedback._id} className="feedback-item">
              <FaUserCircle className="feedback-item-icon" />
              <div className="feedback-item-content">
                <strong>{feedback.userId.name}</strong>
                <p>{feedback.feedback}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No feedback yet.</p>
        )}
      </div>
    </div>
  );
};

export default CourseFeedback;
