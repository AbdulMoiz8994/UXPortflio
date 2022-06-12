import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutFunc } from "../reducer/auth-action";

export const Profile = () => {
  const showuser = useSelector((value) => value.user);
  console.log(showuser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(logoutFunc(showuser));
    navigate("/");
  };
  return (
    <div>
      welcome {showuser}
      <button onClick={logout}>Logout</button>
    </div>
  );
};
