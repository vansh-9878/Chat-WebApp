const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: ["http://localhost:5173"], methods: ["GET", "POST"] },
});

const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("A User Connected... ", socket.id);
  const userId = socket.handshake.query.userId;
  console.log(userId);
  if (userId != "undefined") userSocketMap[userId] = socket.id;

  //used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  //used to listen to events from server and client
  socket.on("disconnect", () => {
    console.log("Disconnected ", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

module.exports = { app, io, server, getReceiverSocketId };
