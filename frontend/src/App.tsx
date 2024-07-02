import Login from "./Pages/Login";
import "bootstrap/dist/css/bootstrap.css";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ConvoContextProvider } from "./context/ConvoContext";

const App = () => {
  const { authUser } = useContext(AuthContext);

  return (
    <ConvoContextProvider>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />
        </Routes>
        <Toaster />
      </div>
    </ConvoContextProvider>
  );
};

export default App;
