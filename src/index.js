import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
//import App from "../src/components/api";
import { HashRouter } from "react-router-dom";
// import Dashboard from "../src/components/api";
//import App from "./components/Chart";
//import TradingViewWidget from './components/Tv';
//import App from './components/BSEDataFetcher';
//import YahooFinanceDataFetcher from './components/BSEDataFetcher';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App/>
  //<HashRouter><YahooFinanceDataFetcher/></HashRouter>
  
  //<App />
);

// If you want to start measuring performance in your app, pass a functi
