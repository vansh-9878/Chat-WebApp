import { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const usernameElement = useRef();
  const passwordElement = useRef();
  const { loading, login } = useLogin();

  const handleLoginClick = async (e) => {
    e.preventDefault();
    const username = usernameElement.current.value;
    const password = passwordElement.current.value;
    await login({ username, password });
    usernameElement.current.value = "";
    passwordElement.current.value = "";
  };

  return (
    <>
      <div className="container main">
        <div className=" login">LOGIN</div>
        <div className="partition">
          <form onSubmit={handleLoginClick}>
            <div className="mb-3">
              <label className="form-label">UserName</label>
              <input
                ref={usernameElement}
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter UserName"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                ref={passwordElement}
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
              />
            </div>
            <button className="btn btn-info">Log In</button>
            <div className="form-text" id="basic-addon4">
              <Link to="/signup">Don't have an account?</Link>
            </div>
          </form>
          <div className="design"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
