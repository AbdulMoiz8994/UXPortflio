import React from "react";
import { useDispatch } from "react-redux";
import { incrementAction, decrementAction } from "../reducer/index";

export const ButtonDispatch = () => {
  // make the variabel of useDispatch Function
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
      <button onClick={() => dispatch(decrementAction())}>Decrement</button>
    </div>
  );
};
