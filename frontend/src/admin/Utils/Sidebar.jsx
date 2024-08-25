import React from "react";
import "./common.css";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { FaBook, FaUserAlt } from "react-icons/fa";
import { UserData } from "../../context/UserContext";
import { FaMoneyBillAlt, FaCommentAlt } from "react-icons/fa"; // Import FaCommentAlt

const Sidebar = () => {
  const { user } = UserData();
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to={"/admin/dashboard"}>
            <div className="icon">
              <AiFillHome />
            </div>
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to={"/admin/course"}>
            <div className="icon">
              <FaBook />
            </div>
            <span>Courses</span>
          </Link>
        </li>

        {user && user.mainrole === "superadmin" && (
          <li>
            <Link to={"/admin/users"}>
              <div className="icon">
                <FaUserAlt />
              </div>
              <span>Users</span>
            </Link>
          </li>
        )}

        <li>
          <Link to={"/admin/payments"}>
            <div className="icon">
              <FaMoneyBillAlt />
            </div>
            <span>Payments</span>
          </Link>
        </li>

        <li>
          <Link to={"/admin/feedback"}>
            <div className="icon">
              <FaCommentAlt />
            </div>
            <span>Feedback</span>
          </Link>
        </li>

        <li>
          <Link to={"/account"}>
            <div className="icon">
              <AiOutlineLogout />
            </div>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
