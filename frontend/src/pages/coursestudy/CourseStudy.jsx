import React, { useEffect } from "react";
import "./coursestudy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import FeedbackForm from "../../components/feedback/FeedbackForm";
import CourseFeedback from "../../components/feedback/CourseFeedback";

const CourseStudy = ({ user }) => {
  const params = useParams();
  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      user &&
      user.role !== "admin" &&
      !user.subscription.includes(params.id)
    ) {
      navigate("/");
    } else {
      fetchCourse(params.id);
    }
  }, [fetchCourse, navigate, params.id, user]);

  return (
    <div className="course-study-page">
      <div className="course-study-section">
        {course ? (
          <div className="course-container">
            <div className="course-image">
              <img src={`${server}/${course.image}`} alt={course.title} />
            </div>
            <div className="course-details">
              <h1>{course.title}</h1>
              <p className="description">{course.description}</p>
              <p className="instructor">Instructor: {course.createdBy}</p>
              <p className="duration">Duration: {course.duration} weeks</p>
              <Link to={`/lectures/${course._id}`} className="lectures-link">
                Go to Lectures
              </Link>
            </div>
          </div>
        ) : (
          <p>Loading course details...</p>
        )}
      </div>
      <div className="feedback-section">
        {user && <FeedbackForm courseId={params.id} />}
        <CourseFeedback courseId={params.id} />
      </div>
    </div>
  );
};

export default CourseStudy;
