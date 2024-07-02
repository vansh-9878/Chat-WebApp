const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Please provide the name"],
    },
    username: {
      type: String,
      required: [true, "Please provide the username"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide the password"],
      minlength: 6,
    },
    gender: {
      type: String,
      required: [true, "Please provide the gender"],
      enum: ["male", "female"],
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

userSchema.methods.createJWT = function (userId, res) {
  const token = jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.EXPIRES_IN,
    },
    { timestamps: true }
  );

  res.cookie("jwt", token, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.SECURE !== "development",
    domain: "localhost:5000",
  });
  return token;
};

module.exports = mongoose.model("User", userSchema);
