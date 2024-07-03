import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
  return (
    <header className="site-header">
      <div className="logo">E-Learning</div>

      <nav className="nav-links">
        <Link to={"/"} className="nav-link">Home</Link>
        <Link to={"/courses"} className="nav-link">Courses</Link>
        <Link to={"/about"} className="nav-link">About</Link>
        <Link to={"/contact"} className="nav-link">Contact Us</Link>
        {isAuth ? (
          <Link to={"/account"} className="nav-link">Account</Link>
        ) : (
          <Link to={"/login"} className="nav-link">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
