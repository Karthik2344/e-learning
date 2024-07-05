import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Utils/Layout";
import axios from "axios";
import { server } from "../../main";
import "./dashboard.css";
import { FaChalkboardTeacher, FaUsers, FaBook } from "react-icons/fa"; // Import icons

const AdminDashboard = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [stats, setStats] = useState({
    totalCourses: 0,
    totalLectures: 0,
    totalUsers: 0,
  });

  async function fetchStats() {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setStats(data.stats);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <Layout>
      <div className="main-content">
        <div className="box">
          <FaBook size={40} color="#004080" />
          <p>Total Courses</p>
          <p>{stats.totalCourses}</p>
        </div>
        <div className="box">
          <FaChalkboardTeacher size={40} color="#004080" />
          <p>Total Lectures</p>
          <p>{stats.totalLectures}</p>
        </div>
        <div className="box">
          <FaUsers size={40} color="#004080" />
          <p>Total Users</p>
          <p>{stats.totalUsers}</p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
