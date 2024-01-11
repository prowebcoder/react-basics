import logo from "./logo.svg";
import "./App.css";
import { Phone, Charger } from "./Phone";
// import User from "./User";
// import Address from "./Address";
// import Employees from "./Employees";
// import { Component } from "react";

import React, { useState } from "react";
import Formdata from "./Formdata";
import Formfields from "./Formfields";
import Members from "./Members";
import Students from "./Students";
import Render from "./Render";
// import Btn from "./Btn";
function App() {
  const [data, setData] = React.useState(true);
  function dalMakni() {
    console.log("Hello From dala  Makni");
  }
  return (
    <div>
      {data ? (
        <div>
          <Render car="audi" emps={{ name: "Puneet", age: "30" }}></Render>
        </div>
      ) : (
        <div>The component was unmounted</div>
      )}
      {/* 
      <button
        onClick={() => {
          setData(!data);
          console.log(data);
        }}
      >
        Show Form
      </button>
      <Members pizza={dalMakni}></Members>
      <Students pizza={dalMakni} />
      <Formfields /> */}

      <button onClick={() => setData(!data)}>Click me to Toggle Render</button>
    </div>
  );
}

export default App;
