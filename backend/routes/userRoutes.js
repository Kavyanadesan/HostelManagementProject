import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";
import User from "../models/User.js";

const router = express.Router();

// Hardcoded Admin credentials (you can move these to env variables)
const ADMIN_USERNAME = "admin@gmail.com";
const ADMIN_PASSWORD = "admin123";

// SIGNUP Route
router.post(
  "/signup",
  [
    check("username", "Please provide a valid username").not().isEmpty(),
    check("email", "Please provide a valid email").isEmail(),
    check("password", "Password should be at least 6 characters").isLength({
      min: 6,
    }),
    check("role", "Role must be either admin, staff, or student").isIn([
      "admin",
      "staff",
      "student",
    ]),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, role } = req.body;

    try {
      // Check if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new user
      user = new User({
        username,
        email,
        password: hashedPassword,
        role,
      });

      await user.save();

      // Return a JWT token
      const payload = { user: { id: user.id, role: user.role } };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.json({ token });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

// LOGIN Route
router.post(
  "/login",
  [
    check("username", "Please provide a valid username").not().isEmpty(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
      // Hardcoded admin login check
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        const payload = { user: { id: "admin_id", role: "admin" } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        return res.json({ token });
      }

      // Check if user exists in DB
      let user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      // Compare the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      // Return a JWT token
      const payload = { user: { id: user.id, role: user.role } };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.json({ token });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

export default router;
