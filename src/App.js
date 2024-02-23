import React from "react";
import { Route,Routes } from 'react-router-dom'
import Dashboard from "./components/api"

const App = () => {
  console.log("App");
  return (
    <>
      <Dashboard/>
    </>
  );
};

export default App;
