require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const auth = require("./Routes/authRouter");
const messageRouter = require("./Routes/messageRouter");
const userRouter = require("./Routes/userListRouter");
const connectDB = require("./database/connect");
const authorization = require("./middleware/authorization");
const cors = require("cors");
const { app, server } = require("./socket/socket");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", auth);
app.use("/api/messages", messageRouter);
app.use("/api/userList", authorization, userRouter);

const start = () => {
  try {
    connectDB(process.env.mongo_uri);
    server.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
