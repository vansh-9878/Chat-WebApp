import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useContext(AuthContext);
  const signup = async ({
    password,
    confirmPassword,
    username,
    gender,
    fullname,
  }) => {
    const success = handleInputErrors({
      password,
      confirmPassword,
      username,
      gender,
      fullname,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password,
          confirmPassword,
          username,
          gender,
          fullname,
        }),
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
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
};

export default useSignUp;

const handleInputErrors = ({
  password,
  confirmPassword,
  username,
  gender,
  fullname,
}) => {
  if (!fullname || !password || !confirmPassword || !username || !gender) {
    toast.error("Fill all the fields...");

    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Password and Confirm Password do not match..");
    return false;
  }
  return true;
};
