import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from 'header/Header';
import List from 'list/List';
import "./index.css";

const App = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(prev => prev + 1);
  }

  const remove = () => {
    setCount(prev => prev - 1);
  }

  return (
    <div className="wrapper">
      <div className='mfeName'>CFE (Host)</div>

      <div>
        <div>Name: home</div>
        
        {/* Header MFE */}
        <Header count={count} />

        {/* List MFE */}
        <List add={add} remove={remove}/>
      </div>
      
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
