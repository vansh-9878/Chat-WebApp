import ConversationList from "./ConversationList";
import Logout from "./Logout";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <>
      <div className="ms-2">
        <p
          className="fs-3 text-start pt-2"
          style={{ height: "44px", color: "#124721" }}
        >
          QuackQuack
        </p>
        <hr />
        <SearchInput />
        <ConversationList />
        <Logout />
      </div>
    </>
  );
};

export default Sidebar;
