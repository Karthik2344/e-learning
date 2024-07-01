import { User } from "../models/User.js"; // Note the .js extension
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendMail, { sendForgotMail } from "../middlewares/sendMail.js"; // Note the .js extension
import TryCatch from "../middlewares/TryCatch.js";

// Register User
export const register = TryCatch(async (req, res) => {
  const { email, name, password } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({
      message: "User Already exists",
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  user = new User({
    name,
    email,
    password: hashPassword,
  });

  await user.save();

  const otp = Math.floor(Math.random() * 1000000);

  const activationToken = jwt.sign(
    {
      user,
      otp,
    },
    process.env.Activation_Secret,
    {
      expiresIn: "5m",
    }
  );

  const data = {
    name,
    otp,
  };

  await sendMail(email, "E-learning", data);

  res.status(200).json({
    message: "OTP sent to your mail",
    activationToken,
  });
});

// Verify User
export const verifyuser = TryCatch(async (req, res) => {
  const { otp, activationToken } = req.body;

  let verify;
  try {
    verify = jwt.verify(activationToken, process.env.Activation_Secret);
  } catch (error) {
    return res.status(400).json({
      message: "OTP Expired",
    });
  }

  if (verify.otp !== otp) {
    return res.status(400).json({
      message: "Incorrect OTP",
    });
  }

  // Find the user by email
  const user = await User.findOne({ email: verify.user.email });

  if (!user) {
    return res.status(400).json({
      message: "User does not exist",
    });
  }

  // If user exists, respond with success message
  res.json({
    message: "User Registered",
  });
});

// Login User
export const loginUser = TryCatch(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "No User with this email",
    });
  }

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) {
    return res.status(400).json({
      message: "Wrong Password",
    });
  }

  const token = jwt.sign({ _id: user._id }, process.env.Jwt_Sec, {
    expiresIn: "15d",
  });

  res.json({
    message: `Welcome back ${user.name}`,
    token,
    user,
  });
});

// Get My Profile
export const myProfile = TryCatch(async (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      message: "User not authenticated",
    });
  }

  const user = await User.findById(req.user._id);
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json({ user });
});

export const forgotPassword = TryCatch(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(404).json({
      message: "No User with this email",
    });

  const token = jwt.sign({ email }, process.env.Forgot_Secret);

  const data = { email, token };

  await sendForgotMail("E learning", data);

  user.resetPasswordExpire = Date.now() + 5 * 60 * 1000;

  await user.save();

  res.json({
    message: "Reset password link is send to your mail",
  });
});

export const resetPassword = TryCatch(async (req, res) => {
  const decodedData = jwt.verify(req.query.token, process.env.Forgot_Secret);

  const user = await User.findOne({ email: decodedData.email });

  if (!user)
    return res.status(404).json({
      message: "No user with this email",
    });

  if (user.resetPasswordExpire == null)
    return res.status(400).json({
      message: "Token Expired",
    });

  if (user.resetPasswordExpire < Date.now()) {
    return res.status(400).json({
      message: "Token Expired",
    });
  }

  const password = await bcrypt.hash(req.body.password, 10);

  user.password = password;

  user.resetPasswordExpire = null;

  await user.save();

  res.json({ message: "Password Reset" });
});
