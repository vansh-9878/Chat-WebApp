const { StatusCodes } = require("http-status-codes");
const User = require("../models/user");

const getUserList = async (req, res) => {
  try {
    const userId = req.user._id;
    const allUsers = await User.find({ _id: { $ne: userId } }).select(
      "-password"
    );
    res.status(StatusCodes.OK).json({ allUsers });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Internal Server Error...", error });
  }
};

module.exports = {
  getUserList,
};
