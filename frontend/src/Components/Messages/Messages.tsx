import SingleMessage from "./SingleMessage";
import useGetMessages from "../../hooks/useGetMessages";
import { useContext } from "react";
import { ConvoContext } from "../../context/ConvoContext";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  useListenMessages();
  const { loading } = useGetMessages();
  const { messages, setMessages } = useContext(ConvoContext);

  return (
    <>
      <div className="messages messages2 chatBG">
        {!loading &&
          messages.length > 0 &&
          messages.map((message) => (
            <SingleMessage key={message._id} message={message} />
          ))}
        {loading && (
          <div className="card bg-transparent border-0" aria-hidden="true">
            <div className="card-body">
              <p className="card-text placeholder-glow">
                <span className="placeholder col-4"></span>
                <span className="placeholder col-2"></span>
                <span className="placeholder col-2"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-7"></span>
              </p>
            </div>
          </div>
        )}
        {!loading && messages.length === 0 && (
          <p className="text-center">Send a message to start a convo</p>
        )}
      </div>
    </>
  );
};

export default Messages;
