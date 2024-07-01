import React, { useState } from "react";
import "./auth.css";
import logo from "../../assets/login.svg"; // Ensure this path is correct
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import { CourseData } from "../../context/CourseContext"; // If needed

const Login = () => {
  const navigate = useNavigate();
  const { btnLoading, loginUser } = UserData();
  const [email, setEmail] = useState(""); // Initialize with an empty string
  const [password, setPassword] = useState(""); // Initialize with an empty string

  // If CourseData is required
  const { fetchMyCourse } = CourseData();

  const submitHandler = async (e) => {
    e.preventDefault();
    await loginUser(email, password, navigate, fetchMyCourse); // Ensure the context function is correct
  };

  return (
    <div className="container">
      <div className="form-login">
        <img src={logo} alt="Login" />{" "}
        {/* Added alt attribute for accessibility */}
        <div className="separator">
          <div className="form-content">
            <h1 className="header">Login</h1>
            <form onSubmit={submitHandler}>
              <div className="field input-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email" // Added id attribute
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="field input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password" // Added id attribute
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i className="bx bx-hide eye-icon"></i>{" "}
                {/* Ensure this icon is correct */}
              </div>

              <div className="field button-field">
                <button
                  disabled={btnLoading}
                  type="submit"
                  className="common-btn"
                >
                  {btnLoading ? "Please Wait..." : "Login"}
                </button>
                <div className="form-link">
                  <p>
                    Don't have an account? <Link to="/register">Register</Link>
                  </p><br></br>
                  <p>
                    <Link to="/forgot">Forgot Password?</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
