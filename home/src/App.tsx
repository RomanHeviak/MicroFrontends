import React, { useEffect, useState, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Counter from "./components/Counter/Counter";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

  return (
    <div className="wrapper">
      <div className='mfeNameMain'>
        <span>CFE (Host)</span>
      </div>
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/counter" element={<Counter/>} />
        </Routes>
      </Router>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
