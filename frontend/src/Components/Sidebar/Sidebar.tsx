import ConversationList from "./ConversationList";
import Logout from "./Logout";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="ms-2">
      <SearchInput />
      <div
        className="w-75 bg-secondary-subtle "
        style={{ height: "1.4px" }}
      ></div>
      <ConversationList />
      <Logout />
    </div>
  );
};

export default Sidebar;
