const Message = require("../models/message");
const Conversation = require("../models/conversation");
const { StatusCodes } = require("http-status-codes");
const { getReceiverSocketId, io } = require("../socket/socket");

const sendMessage = async (req, res) => {
  try {
    const { message, id: senderId } = req.body;
    const { id: receiverId } = req.params;
    let room = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!room) {
      room = await Conversation.create({
        participants: [receiverId, senderId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      messageContent: message,
    });

    if (newMessage) {
      room.messages.push(newMessage._id);
    }

    await Promise.all([room.save(), newMessage.save()]);

    // const findMessage = await Message.findOne({ messageContent: message });
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      //it is used to send events to a specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(StatusCodes.OK).json(newMessage);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Internal Server Error... here", error });
  }
};

const getMessages = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const { senderId } = req.body;
    const room = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    if (!room) {
      return res.status(StatusCodes.OK).json([]);
    }
    res.status(StatusCodes.OK).json(room.messages);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Internal Server Error...", error });
  }
};

module.exports = {
  sendMessage,
  getMessages,
};
