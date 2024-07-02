import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useContext(AuthContext);
  const login = async ({ username, password }) => {
    const success = handleInputErrors({
      password,
      username,
    });
    // if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!data) {
        throw new Error();
      }
      if (data.msg) {
        throw new Error();
      }

      localStorage.setItem("app-user", JSON.stringify(data));
      setAuthUser(data);
      window.location.reload();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

const handleInputErrors = ({ password, username }) => {
  if (!password || !username) {
    toast.error("Fill all the fields...");
    return false;
  }
};
