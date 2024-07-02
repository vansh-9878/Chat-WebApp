import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { ConvoContext } from "../context/ConvoContext";
import { AuthContext } from "../context/AuthContext";

const useSendMessage = () => {
  const { authUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("app-user");
  const { setMessage, selectedConvo, setMessages, messages } =
    useContext(ConvoContext);

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/api/messages/send/${selectedConvo._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", authorization: token },
          body: JSON.stringify({ message, id: authUser.id }),
        }
      );
      const data = await res.json();
      if (data.msg) toast.success(data.msg);
      const newArray = [...messages];
      newArray.unshift(data);
      // console.log(newArray);
      setMessages(newArray);
      // setMessage([...message, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
};

export default useSendMessage;
