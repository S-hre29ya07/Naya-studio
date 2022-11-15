import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Splash from "./containers/Splash/index";
import "./App.scss";

import CanvasSketching from "./containers/CanvasSketching";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem(`isLoggedIn`)) {
      navigate(`/sketch`);
    } else {
      navigate(`/`);
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Splash />}></Route>
      <Route path="/sketch" element={<CanvasSketching />}></Route>
    </Routes>
  );
};

export default App;
