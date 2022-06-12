import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const params = useParams();
  // const userID = params.userID;
  const showActiveUser = searchParams.get("filter") === "active";

  return (
    <div>
      {/* <Link to=""> */}
      <h1>Users 1</h1>
      {/* </Link> */}
      <h1>Users 2</h1>
      <h1>Users 3</h1>

      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active Users
      </button>
      <button onClick={() => setSearchParams({})}>Reset Filter</button>

      {showActiveUser ? <h1>Active All Users</h1> : <h1>ALL User</h1>}
    </div>
  );
};
