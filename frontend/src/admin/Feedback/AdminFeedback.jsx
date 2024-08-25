import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../main";
import "./adminfeedback.css";
import Layout from "../Utils/Layout";

const AdminFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const { data } = await axios.get(`${server}/api/admin/feedback`);
        setFeedbacks(data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <Layout>
      <div className="admin-feedback">
        <div className="headf">
          <h1>All Feedbacks</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Course Name</th>
              <th>Feedback</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index) => (
              <tr key={feedback._id}>
                <td>{index + 1}</td>
                <td>{feedback.userId.name}</td>
                <td>{feedback.courseId.title}</td>
                <td>{feedback.feedback}</td>
                <td>{new Date(feedback.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default AdminFeedback;
