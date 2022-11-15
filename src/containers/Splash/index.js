import React, { Fragment, useState } from "react";

import SplashScreen from "../../components/splashScreen";
import SignInPopup from "../../components/popups/signInPopup/signInPopup";
import SignUpPopup from "../../components/popups/signUpPopup/signUpPopup";

const Splash = () => {
  const [showCurrentScreen, setShowCurrentScreen] = useState({
    isShowSignIn: false,
    isShowSignUp: false,
    isShowSplashScreen: true,
  });

  const showingHandler = (label) => {
    label === `signInOpen` &&
      setShowCurrentScreen({ ...showCurrentScreen, isShowSignIn: true });

    label === `signUpOpen` &&
      setShowCurrentScreen({ ...showCurrentScreen, isShowSignUp: true });
  };

  const closingHandler = (label) => {
    label === `signInClose` &&
      setShowCurrentScreen({ ...showCurrentScreen, isShowSignIn: false });

    label === `signUpClose` &&
      setShowCurrentScreen({ ...showCurrentScreen, isShowSignUp: false });
  };

  return (
    <Fragment>
      <SplashScreen onClick={showingHandler} />
      {showCurrentScreen.isShowSignIn && (
        <SignInPopup onClick={closingHandler} />
      )}

      {showCurrentScreen.isShowSignUp && (
        <SignUpPopup onClick={closingHandler} />
      )}
    </Fragment>
  );
};

export default Splash;
