import React from "react";
import { MdDashboard } from "react-icons/md";
import "./account.css";
import { IoMdLogOut } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };

  return (
    <div>
      {user && (
        <div className="profile">
          <div className="acc-profile-icon">
            <FaUserCircle />
          </div>
          <h2>My Profile</h2>
          <div className="profile-info">
            <p>
              <h3>Name</h3> {user.name}
            </p>
            <p>
              <h3>Email</h3> {user.email}
            </p>
            {user.role !== "admin" && (
              <button
                onClick={() => navigate(`/${user._id}/dashboard`)}
                className="common-btn"
              >
                <MdDashboard />
                <span>Dashboard</span>
              </button>
            )}
            <br />
            {user.role === "admin" && (
              <button
                onClick={() => navigate(`/admin/dashboard`)}
                className="common-btn"
              >
                <MdDashboard />
                <span>Admin Dashboard</span>
              </button>
            )}
            <br />
            <button onClick={logoutHandler} className="common-btn logout">
              <IoMdLogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
