import { FiLogOut } from "react-icons/fi";
import useLogout from "../../hooks/useLogout";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const { loading, logout } = useLogout();
  const handleLogout = () => {
    logout();
  };
  return (
    <button
      className="btn btn-secondary fs-5 d-flex "
      style={{ marginTop: "47px", marginLeft: "30px" }}
      onClick={handleLogout}
    >
      <div>Logout</div>
      <div className="ms-2">
        <FiLogOut />
      </div>
    </button>
  );
};

export default Logout;
