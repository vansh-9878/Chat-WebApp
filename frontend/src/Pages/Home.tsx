import { useEffect } from "react";
import MessageContainer from "../Components/Messages/MessageContainer";
import Sidebar from "../Components/SideBar/Sidebar";

const Home = () => {
  return (
    <div className="d-flex main main2">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
