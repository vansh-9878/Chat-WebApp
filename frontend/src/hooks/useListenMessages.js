import { useContext, useEffect } from "react";
import { SocketContext } from "../context/SocketContext";
import { ConvoContext } from "../context/ConvoContext";

const useListenMessages = () => {
  const { socket } = useContext(SocketContext);
  const { messages, setMessages } = useContext(ConvoContext);
  let formattedMessages = [];
  if (messages.length > 0) {
    formattedMessages = [...messages];
  }
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const newArray = [...formattedMessages];
      newArray.unshift(newMessage);
      setMessages(newArray);
    });
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
