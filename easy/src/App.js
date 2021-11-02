import "./App.css";
import React from "react";

const ele = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world"
);

function tiktok() {
  const el = (
    <div>
      <h1>hello, world</h1>
      <h2>It is {new Date().toLocaleDateString()}.</h2>
    </div>
  );
}

function App() {
  return;
}

export default App;
