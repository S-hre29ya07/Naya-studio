import React, { useState } from "react";
import "./signUpPopup.scss";

import Backdrop from "./../../backdrop/backdrop";
import { emailValidation, passwordValidation } from "../../../utils";
import { useNavigate } from "react-router-dom";

const SignUpPopup = (props) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [userName, setUserName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [errorMsg, setErrorMsg] = useState(``);

  const submitHandler = (e) => {
    e.preventDefault();

    if (firstName.trim() === ``) {
      setErrorMsg(`Please enter first name.`);
    } else if (lastName.trim() === ``) {
      setErrorMsg(`Please enter last name.`);
    } else if (userName.trim() === ``) {
      setErrorMsg(`Please enter username name.`);
    } else if (!emailValidation(email)) {
      setErrorMsg(`Enter valid email.`);
    } else if (!passwordValidation(password)) {
      setErrorMsg(`Please enter password.`);
    } else {
      setErrorMsg(``);
      window.localStorage.setItem(`isLoggedIn`, true);
      navigate(`/sketch`);
    }
  };

  return (
    <Backdrop>
      <div className="signup_container">
        <div className="modal-bg">
          <div id="modal">
            <span className="span">
              Sign Up
              <span id="close" onClick={() => props.onClick(`signUpClose`)}>
                &#215;
              </span>
            </span>
            <form onSubmit={submitHandler}>
              {<span className="error"> {errorMsg} &nbsp;</span>}
              <input
                id="firstname"
                name="firstname"
                type="text"
                placeholder="First Name*"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="off"
              />

              <input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Last Name*"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="off"
              />

              <input
                id="username"
                name="username"
                type="textbox"
                placeholder="Username*"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                autoComplete="off"
              />

              <input
                id="email"
                name="email"
                type="textbox"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />

              <button name="submit" id="submit" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default SignUpPopup;
