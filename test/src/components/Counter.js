import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD, MINUS } from "./counterSlice";

function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("Josh");

  useEffect(() => {
    console.log("You clicked");
  }, []);

  return (
    <div>
      <h2>{counter}</h2>
      <h2>{name}</h2>
      <button onClick={() => dispatch(ADD())}>1 Plus</button>
      <button onClick={() => dispatch(MINUS())}>1 Minus</button>
      <button
        onClick={() => {
          setName("Sejun");
        }}
      >
        name Change
      </button>
    </div>
  );
}
export default Counter;
