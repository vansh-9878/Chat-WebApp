const express = require("express");
const router = express.Router();
const { sendMessage, getMessages } = require("../controllers/message");

router.route("/send/:id").post(sendMessage);
router.route("/:id").post(getMessages);

module.exports = router;
