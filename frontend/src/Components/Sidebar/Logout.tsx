import { FiLogOut } from "react-icons/fi";
import useLogout from "../../hooks/useLogout";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const { loading, logout } = useLogout();
  const handleLogout = () => {
    logout();
  };
  return (
    <div
      className="mt-5 fs-5 d-flex logout"
      style={{ cursor: "pointer", width: "220px" }}
      onClick={handleLogout}
    >
      <div>Logout</div>
      <div className="ms-2">
        <FiLogOut />
      </div>
    </div>
  );
};

export default Logout;
