import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ConvoContext } from "../../context/ConvoContext";
import { extractTime } from "../../utilities/extractTime";

const SingleMessage = ({ message }) => {
  const { authUser } = useContext(AuthContext);
  const { selectedConvo } = useContext(ConvoContext);
  const fromMyself = message.senderId === authUser.id;
  const chatClass = fromMyself ? "justify-content-start flex-row-reverse" : "";
  const profile = fromMyself ? authUser.profilePic : selectedConvo.profilePic;
  const colorBubble = fromMyself ? "bg-primary" : "bg-secondary";
  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className="d-flex flex-column">
      <div className={`d-flex flex-row me-2 ${chatClass} ${shakeClass}`}>
        <div className="profile rounded-circle">
          <img
            className="avatar"
            src={profile}
            style={{ height: "30px", width: "30px" }}
          />
        </div>
        <p
          className={`small p-2 me-3 mb-1 text-white rounded-3 ${colorBubble}`}
        >
          {message.messageContent}
        </p>
      </div>
      <p
        className={`d-flex flex-row ${chatClass} m-2`}
        style={{ fontSize: "12px" }}
      >{`${formattedTime}`}</p>
    </div>
  );
};

export default SingleMessage;
