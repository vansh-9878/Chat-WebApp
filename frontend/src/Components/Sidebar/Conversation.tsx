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
        className={`d-flex ps-2 pt-2 ${isSelected ? "bg-dark-subtle" : ""}`}
        style={{ cursor: "pointer", height: "52px" }}
        onClick={handleClick}
      >
        <div className="profile rounded-circle mt-1 ">
          <img
            className="avatar"
            src={conversation.profilePic}
            style={{ height: "30px", width: "30px" }}
          />
        </div>
        <div className="mt-1 ms-2 fs-5">
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
