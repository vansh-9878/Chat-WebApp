import { createContext, useState } from "react";

export const ConvoContext = createContext({
  selectedConvo: null,
  message: null,
  messages: [],
  setSelectedConvo: () => {},
  setMessage: () => {},
  setMessages: () => {},
});

export const ConvoContextProvider = ({ children }) => {
  const [selectedConvo, setSelectedConvo] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  return (
    <ConvoContext.Provider
      value={{
        selectedConvo,
        setSelectedConvo,
        message,
        setMessage,
        messages,
        setMessages,
      }}
    >
      {children}
    </ConvoContext.Provider>
  );
};
