import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const getConversations = async () => {
    setLoading(true);
    const token = localStorage.getItem("app-user");
    try {
      const res = await fetch("http://localhost:5000/api/userList", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      });
      const data = await res.json();
      if (data.msg) {
        throw new Error(data.msg);
      }
      localStorage.setItem("list", data.allUsers);
      setConversations(data.allUsers);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getConversations();
  }, []);

  return {
    loading,
    conversations,
    getConversations,
  };
};

export default useConversation;
