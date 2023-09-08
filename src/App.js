import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./page/login";
import Home from "./page/private/home";

function App() {
  return (
    <Routes>
      <Route path="Login" element={<Login />} />
      <Route path="Home" element={<Home />} />
    </Routes>
  );
}

export default App;
