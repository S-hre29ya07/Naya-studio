import React, { useState } from "react";
import "./signInPopup.scss";

import Backdrop from "./../../backdrop/backdrop";
import { emailValidation, passwordValidation } from "../../../utils";
import { useNavigate } from "react-router-dom";

const SignInPopup = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [errorMsg, setErrorMsg] = useState(``);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!emailValidation(email)) {
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
      <div className="signin_container">
        <div className="modal-bg">
          <div id="modal">
            <span className="span">
              Sign In
              <span id="close" onClick={() => props.onClick(`signInClose`)}>
                &#215;
              </span>
            </span>

            <form onSubmit={submitHandler}>
              {<span className="error"> {errorMsg} &nbsp;</span>}

              <input
                name="email"
                type="textbox"
                placeholder="Email*"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                autoComplete="off"
              />
              <input
                name="password"
                type="password"
                placeholder="Password*"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="off"
              />

              <button name="submit" id="submit" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default SignInPopup;
