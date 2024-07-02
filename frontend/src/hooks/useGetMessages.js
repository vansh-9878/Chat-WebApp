import { useContext, useEffect, useState } from "react";
import { ConvoContext } from "../context/ConvoContext";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConvo } = useContext(ConvoContext);
  const token = localStorage.getItem("app-user");
  const { authUser } = useContext(AuthContext);
  const getMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/api/messages/${selectedConvo._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
          body: JSON.stringify({ senderId: authUser.id }),
        }
      );
      const data = await res.json();
      if (data.msg) throw new Error(data.msg);
      const newData = [...data].reverse();
      setMessages(newData);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (selectedConvo?._id) getMessages();
  }, [selectedConvo._id, setMessages]);
  return { messages, loading, getMessages };
};

export default useGetMessages;
