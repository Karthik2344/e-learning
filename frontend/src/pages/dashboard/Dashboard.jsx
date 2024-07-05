import React from "react";
import "./dashboard.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Dashboard = () => {
  const { mycourse } = CourseData();

  console.log(mycourse);
  return (
    <div className="student-dashboadrd">
      <div className="dash-head">
        <h1>All Enrolled Courses</h1>
      </div>
      <div className="dashboard-content">
        {mycourse && mycourse.length > 0 ? (
          mycourse.map((e) => <CourseCard key={e._id} course={e} />)
        ) : (
          <p>No Course Enrolled Yet</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
