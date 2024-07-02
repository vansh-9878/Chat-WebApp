import { createContext, useState } from "react";

export const AuthContext = createContext({
  authUser: JSON.parse(localStorage.getItem("app-user")) || undefined,
  setAuthUser: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("app-user")) || undefined
  );
  return (
    <AuthContextProvider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContextProvider>
  );
};
