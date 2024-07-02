const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authorization = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    const token = JSON.parse(header).token;
    // console.log(token2);

    // const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ msg: "UNAUTHORIZED1" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ msg: "UNAUTHORIZED2" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ msg: "User not found" });
    }
    req.user = user;

    next();
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Internal Server Error...", error });
  }
};

module.exports = authorization;
