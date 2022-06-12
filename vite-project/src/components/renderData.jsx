import React from "react";
import { useSelector } from "react-redux";
export const RenderData = () => {
  const counter = useSelector((value) => ({
    counter: value.counter,
    name: value.name,
  }));
  return (
    <div>
      Counter Value: {counter.counter} and {counter.name}
    </div>
  );
};
