import React, { useState } from "react";
import "./ForgotPassword.css"; // Make sure to change the CSS file name to avoid conflicts
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../main";
import forgot from "../../assets/forgot.jpeg";
import { FaEnvelope } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/user/forgot`, { email });

      toast.success(data.message);
      navigate("/login");
      setBtnLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-form-container">
        <div className="image-section">
          <img src={forgot} alt="Security" />
        </div>
        <div className="form-section">
          <h2>Forgot Password?</h2>
          <p>Please enter your email address to reset your password.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email"><FaEnvelope className="mail-icon" /> Enter email</label><br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button disabled={btnLoading} className="common-btn-f">
              {btnLoading ? "Please Wait..." : "Forgot Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
