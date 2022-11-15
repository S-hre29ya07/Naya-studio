import React, { Fragment } from "react";
import "./splashScreen.scss";

const splashScreen = (props) => {
  return (
    <main>
      <div className="main_container">
        <h1 className="splash-heading">Application splash screen!! </h1>
        <div className="nav-container">
          <button
            className="sign-in"
            onClick={() => props.onClick("signInOpen")}
          >
            Sign In
          </button>
          <button
            className="sign-up"
            onClick={() => props.onClick("signUpOpen")}
          >
            SignUp
          </button>
        </div>
      </div>
    </main>
  );
};

export default splashScreen;
