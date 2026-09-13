const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    cuchdId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    universityEmail: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other", "Prefer not to say"],
      required: true,
    },

    safetyPreferences: {
      sameGenderOnly: {
        type: Boolean,
        default: false,
      },

      verifiedStudentsOnly: {
        type: Boolean,
        default: true,
      },
    },

    rating: {
      type: Number,
      default: 5,
      min: 0,
      max: 5,
    },

    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);