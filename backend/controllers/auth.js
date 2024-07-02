const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const bcryptjs = require("bcryptjs");

const signup = async (req, res) => {
  try {
    const { password, confirmPassword, username, gender, fullname } = req.body;

    //check password
    if (password !== confirmPassword) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ msg: "Password and Confirm Password does not match" });
    }

    //username must be unique
    const user = await User.findOne({ username });
    if (user) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ msg: "Username already exists" });
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const girls = [
      "Socks",
      "Kiki",
      "Snowball",
      "Callie",
      "Rocky",
      "Ginger",
      "Patches",
      "Garfield",
      "Jasmine",
    ];
    const boys = [
      "Abby",
      "Luna",
      "Angel",
      "Annie",
      "Tiger",
      "Trouble",
      "Sassy",
      "Nala",
      "Charlie",
    ];

    const num = Math.floor(Math.random() * 9);

    //default profilePic
    profile =
      gender === "male"
        ? `https://api.dicebear.com/9.x/adventurer/svg?seed=${boys[num]}`
        : `https://api.dicebear.com/9.x/adventurer/svg?seed=${girls[num]}`;

    //new user
    const userObj = {
      username,
      password: hashedPassword,
      fullname,
      gender,
      profilePic: profile,
    };
    const newUser = await User.create(userObj);
    const token = newUser.createJWT(newUser._id, res);
    await newUser.save();

    res.status(StatusCodes.OK).json({
      id: newUser._id,
      name: newUser.fullname,
      username: newUser.username,
      profilePic: newUser.profilePic,
      token: token,
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Internal Server Error... I dont know why", error });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    //check for undefined values
    if (!username || !password) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ msg: "Please provdie username and Password" });
    }

    //checking if user exists
    const user = await User.findOne({ username });
    const isPasswordCorrect = bcryptjs.compare(password, user.password);
    if (!user || !isPasswordCorrect) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ msg: "Invalid Credentials..." });
    }

    //token generation
    const token = user.createJWT(user._id, res);
    await user.save();

    res.status(StatusCodes.OK).json({
      id: user._id,
      name: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
      token,
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Internal Server Error...", error });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(StatusCodes.OK).json({ msg: "Logged Out Successfully" });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Internal Server Error...", error });
  }
};

module.exports = {
  login,
  signup,
  logout,
};
