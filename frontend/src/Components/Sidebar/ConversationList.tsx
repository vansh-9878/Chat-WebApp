import Conversation from "./Conversation";
import useConversation from "../../hooks/useConversation";

const ConversationList = () => {
  const { loading, conversations } = useConversation();
  let conversationList = [];
  if (conversations) {
    conversationList = conversations;
  } else {
    conversationList = localStorage.getItem("list");
  }
  return (
    <div className="messages sidebar">
      {conversationList.map((item) => (
        <Conversation key={item._id} conversation={item} />
      ))}
    </div>
  );
};

export default ConversationList;
