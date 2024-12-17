import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15d",
    }
  );
};

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  // Validate input
  if (!email || !password || !name || !role) {
    return res
      .status(400)
      .json({ success: false, message: "Missing required fields" });
  }

  try {
    let user = null;

    // Check if the user already exists
    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email });
    }

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    if (role === "patient") {
      user = new User({
        name,
        email,
        password: hashedPassword,
        photo,
        gender,
        role,
      });
    } else if (role === "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashedPassword,
        photo,
        gender,
        role,
      });
    }

    await user.save();

    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res
      .status(400)
      .json({ status: false, message: "Email and password are required" });
  }

  try {
    let user = null;

    // Search for the user in both User and Doctor collections
    const patient = await User.findOne({ email });
    const doctor = await Doctor.findOne({ email });

    if (patient) {
      user = patient;
    } else if (doctor) {
      user = doctor;
    }

    // If user is not found
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = generateToken(user);

    // Exclude sensitive fields from the response
    const { password: _, ...userData } = user._doc;

    res.status(200).json({
      status: true,
      message: "Successfully logged in",
      token,
      role: user.role,
      data: userData,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ status: false, message: "Failed to login" });
  }
};
