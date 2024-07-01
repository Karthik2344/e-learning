import React, { useState } from "react";
import "./auth.css"; // Ensure the path is correct
import logo from "../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const { btnLoading, registerUser } = UserData();
  const [email, setEmail] = useState(""); // Initialize with an empty string
  const [password, setPassword] = useState(""); // Initialize with an empty string
  const [name, setName] = useState(""); // Initialize with an empty string

  const submitHandler = async (e) => {
    e.preventDefault();
    await registerUser(name, email, password, navigate); // Ensure the context function is correct
  };
  return (
    <div className="container">
      <div className="form-login">
        <img src={logo} alt="Login" />
        <div className="separator">
          <div className="form-content">
            <h1 className="header">Register</h1>
            <form onSubmit={submitHandler}>
              <div className="field input-field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="field input-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="field input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="field button-field">
                <button type="submit" disabled={btnLoading}>{btnLoading?"Please wait...":"Register"}</button>
                <div className="form-link">
                  Already have an account? <Link to="/login">Login</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
