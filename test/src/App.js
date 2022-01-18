import React, { useState, useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="App">
      <Counter />
      <br />
      {/* <Todo /> */}
    </div>
  );
};

export default App;
