import React from "react";
import { useParams } from "react-router-dom";

export const UserList = () => {
  const params = useParams();
  const userID = params.userID;
  return <div>This is a UserList {userID} </div>;
};
