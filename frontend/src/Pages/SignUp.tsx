import { SetStateAction, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
  const nameElement = useRef();
  const UsernameElement = useRef();
  const passwordElement = useRef();
  const confirmElement = useRef();
  const [gender, setGender] = useState("");
  const { loading, signup } = useSignUp();

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const name = nameElement.current.value;
    const Username = UsernameElement.current.value;
    const password = passwordElement.current.value;
    const confirm = confirmElement.current.value;
    const obj = {
      fullname: name,
      username: Username,
      password,
      confirmPassword: confirm,
      gender,
    };
    // console.log(obj);
    await signup(obj);

    nameElement.current.value = "";
    UsernameElement.current.value = "";
    passwordElement.current.value = "";
    confirmElement.current.value = "";
  };
  return (
    <div className="container main">
      <div className=" login">SignUp</div>
      <div className="partition">
        <form onSubmit={handleSubmitForm}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              ref={nameElement}
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">UserName</label>
            <input
              ref={UsernameElement}
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
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              ref={confirmElement}
              type="password"
              className="form-control"
              id="confirm"
              placeholder="Enter Password again"
            />
          </div>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleChange}
          >
            <option selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button className="btn btn-info">Submit</button>
          <div className="form-text" id="basic-addon4">
            <Link to="/login">Already have an account?</Link>
          </div>
        </form>
        <div className="design"></div>
      </div>
    </div>
  );
};

export default SignUp;
