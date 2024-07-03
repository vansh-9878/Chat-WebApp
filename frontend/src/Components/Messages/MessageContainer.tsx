import { useContext, useEffect } from "react";
import NoChat from "../NoChat";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { ConvoContext } from "../../context/ConvoContext";
import { GoDotFill } from "react-icons/go";
import { SocketContext } from "../../context/SocketContext";

const MessageContainer = () => {
  const { selectedConvo, setSelectedConvo } = useContext(ConvoContext);
  const { onlineUsers } = useContext(SocketContext);
  let isOnline = false;
  if (selectedConvo) {
    isOnline = onlineUsers.includes(selectedConvo._id);
  }
  console.log(selectedConvo);

  useEffect(() => {
    return () => setSelectedConvo(null);
  }, [setSelectedConvo]);
  return (
    <>
      {!selectedConvo ? (
        <NoChat />
      ) : (
        <div className="message-container w-100 ">
          <div
            className=""
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              width: "99%",
              margin: "4px",
              paddingLeft: "10px",
            }}
          >
            <div className="fs-4 ms-2">
              <span className="">{selectedConvo.fullname}</span>
            </div>
            <div
              className="ms-2 "
              style={{ color: `${isOnline ? "green" : "grey"}` }}
            >
              <GoDotFill />
              {isOnline ? "Online" : "Offline"}
            </div>
          </div>

          <Messages />
          <MessageInput />
        </div>
      )}
    </>
  );
};

export default MessageContainer;
