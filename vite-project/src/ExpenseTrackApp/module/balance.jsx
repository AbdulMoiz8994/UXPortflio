import React from "react";
import { useSelector } from "react-redux";

export const Balance = () => {
  const data = useSelector((value) => value);
  console.log(data);
  const totalAmount = data.initialtransaction
    .map((amt) => amt.amount)
    .reduce((amulator, amount) => (amulator += amount), 0)
    .toFixed(2);
  // console.log(totalAmount);
  return (
    <div className="balance">
      <h2>${totalAmount}</h2>
    </div>
  );
};
