import React from "react";
import { Link, Outlet } from "react-router-dom";
// import { Featured, New } from "./index";
const Product = () => {
  return (
    <div style={{ display: "block" }}>
      Product
      <input type="text" placeholder="Search Value" />
      <Link to="featured">Featured</Link>
      <Link to="new">New</Link>
      <Outlet />
    </div>
  );
};
export default Product;
