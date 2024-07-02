const express = require("express");
const router = express.Router();
const { getUserList } = require("../controllers/userList");

router.route("/").get(getUserList);

module.exports = router;
