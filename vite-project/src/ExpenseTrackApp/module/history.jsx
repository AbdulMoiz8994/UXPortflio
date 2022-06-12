import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const History = () => {
  const { initialtransaction } = useSelector((value) => value);
  const dispatch = useDispatch();
  // console.log(selector);

  const getID = (id) => {
    console.log(id);
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <div className="historyDiv">
      <ul>
        {initialtransaction.map((data) => {
          console.log(data);
          return (
            <li key={data.id}>
              {" "}
              {data.desc} <span className="amount">${data.amount}</span>
              <button onClick={() => getID(data.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
