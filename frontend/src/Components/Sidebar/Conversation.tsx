import { useContext } from "react";
import { ConvoContext } from "../../context/ConvoContext";

interface Props {
  conversation: any;
}

const Conversation = ({ conversation }: Props) => {
  const { selectedConvo, setSelectedConvo } = useContext(ConvoContext);
  const isSelected = selectedConvo && selectedConvo._id === conversation._id;
  const handleClick = () => {
    setSelectedConvo(conversation);
  };
  return (
    <>
      <div
        className={`d-flex ${isSelected ? "bg-dark-subtle" : ""}`}
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        <div className="profile rounded-circle mt-2">
          <img
            className="avatar"
            src={conversation.profilePic}
            style={{ height: "30px", width: "30px" }}
          />
        </div>
        <div className="mt-2 ms-2">
          <p>{conversation.fullname}</p>
        </div>
      </div>
      <div
        className="w-100 bg-secondary-subtle "
        style={{ height: "1.4px" }}
      ></div>
    </>
  );
};

export default Conversation;
