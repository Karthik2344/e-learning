import React from "react";
import "./header.css";
import { Link, useParams } from "react-router-dom";
import { server } from "../../main";
import { UserData } from "../../context/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { SiStudyverse } from "react-icons/si";

const Header = ({ isAuth }) => {
  const params = useParams();
  const { user } = UserData();
  return (
    <header className="site-header">
      <div className="logo"><SiStudyverse />  E-Learning</div>

      <nav className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/courses" className="nav-link">
          Courses
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact Us
        </Link>
        {isAuth ? (
          <div className="user-profile">
            <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
            <Link to="/account" className="nav-link user-name">
              {user.name.split(' ')[0]} {/* Displaying the first name */}
            </Link>
          </div>
        ) : (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
