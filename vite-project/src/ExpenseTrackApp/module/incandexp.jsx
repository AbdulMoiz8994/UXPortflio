import React from "react";
import { useSelector } from "react-redux";

export const IncAndExp = () => {
  const data = useSelector((value) => value);

  //  Income Amount
  const income = data.initialtransaction
    .map((amt) => amt.amount)
    .filter((amount) => amount > 0)
    .reduce(((ammulator, amount) => ammulator += amount), 0)
    .toFixed(2);
  // console.log(income);
  const expense = data.initialtransaction
    .map((amt) => amt.amount)
    .filter((amount) => amount < 0)
    .reduce(((amm, value) => amm += value), 0)
    .toFixed(2);
  // console.log(expense);

  return (
    <div>
      <div className="income">
        Income: <span>${income}</span>
      </div>
      <div className="expense">
        Expense: <span>${expense}</span>
      </div>
    </div>
  );
};
