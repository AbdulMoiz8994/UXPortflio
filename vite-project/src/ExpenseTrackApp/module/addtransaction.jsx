import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const Addtransaction = () => {
  const dispatch = useDispatch();

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  const getData = (e) => {
    e.preventDefault();
    console.log(Math.random());
    const obj = {
      id: new Date().getTime(),
      desc,
      amount: Number(amount),
    };
    console.log(obj);
    dispatch({
      type: "ADD_DATA",
      payload: obj,
    });
    // desc("")
  };

  return (
    <div>
      <form onSubmit={getData}>
        <div className="inputData">
          <label htmlFor="name">Add Transaction</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setDesc(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="inputamount">
          <label htmlFor="amount">Add Amount</label>
          <input
            type="text"
            id="amount"
            onChange={(e) => setAmount(e.target.value)}
            autoComplete="off"
          />
        </div>
        <button>Add Transaction</button>
      </form>
    </div>
  );
};
