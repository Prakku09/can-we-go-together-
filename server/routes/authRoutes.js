const express = require("express");
const bcrypt = require("bcryptjs");
const Student = require("../models/Student");

const router = express.Router();

// Student Registration
router.post("/register", async (req, res) => {
  try {
    const {
      cuchdId,
      name,
      universityEmail,
      password,
      gender,
      safetyPreferences,
    } = req.body;

    // Check required fields
    if (!cuchdId || !name || !universityEmail || !password || !gender) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Check if student already exists
    const existingStudent = await Student.findOne({
      $or: [{ cuchdId }, { universityEmail }],
    });

    if (existingStudent) {
      return res.status(409).json({
        success: false,
        message: "Student with this CUCHD ID or email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create student
    const student = await Student.create({
      cuchdId,
      name,
      universityEmail,
      password: hashedPassword,
      gender,
      safetyPreferences,
    });

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      student: {
        id: student._id,
        cuchdId: student.cuchdId,
        name: student.name,
        universityEmail: student.universityEmail,
        gender: student.gender,
        verified: student.verified,
      },
    });
  } catch (error) {
    console.error("Registration error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error during registration",
    });
  }
});

module.exports = router;