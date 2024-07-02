import { useContext } from "react";
import { IoSend } from "react-icons/io5";
import { ConvoContext } from "../../context/ConvoContext";
import useSendMessage from "../../hooks/useSendMessage";
// import useGetMessages from "../../hooks/useGetMessages";

const MessageInput = () => {
  const { message, setMessage } = useContext(ConvoContext);
  const { loading, sendMessage } = useSendMessage();
  // const { getMessages } = useGetMessages();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
    sendMessage(message);
    setMessage("");
    // getMessages();
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <div className="d-flex ">
        <div className="" style={{ width: "100%" }}>
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Enter the Message.."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="btn btn-secondary ">
          <IoSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
