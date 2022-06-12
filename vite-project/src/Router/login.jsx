import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { loginFunc, userFunc } from "../reducer/auth-action";
export const Login = () => {
  const [username, setUserName] = useState("");
  //   console.log(username);
  //   const selector = useSelector((value) => value.user);
  const location = useLocation();
  console.log(location.state);
  const relocation = location.state?.path || "/";
  console.log(relocation);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(loginFunc());
    dispatch(userFunc(username));
    navigate(relocation, { replace: true });
  };
  return (
    <div>
      <label htmlFor="user">Login</label>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
