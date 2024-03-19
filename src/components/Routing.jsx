import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import Dashboard from "./api";
import Username from "./Username";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="sign-up-login" element={<Login />}></Route>
        <Route exact path="dashboard-trades" element={<Dashboard />}></Route>
        <Route exact path="user-name-preference" element={<Username />}></Route>
      </Routes>
    </div>
  );
};

export default Routing;
