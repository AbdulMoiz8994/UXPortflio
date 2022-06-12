import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    console.log(isActive);
    return {
      fontWeight: isActive ? "bold" : "normal",
      fontDecoration: isActive ? "none" : "underline",
    };
  };
  const adminUser = useSelector((value) => value.user);

  return (
    <div
      style={{
        width: "100%",
        // padding: "10px",
        backgroundColor: "lightblue",
        // wordSpacing: "90px",
        gap: "20px",
      }}
    >
      <NavLink style={navLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyle} to="/product">
        Products
      </NavLink>
      <NavLink style={navLinkStyle} to="/users">
        Users
      </NavLink>
      <NavLink style={navLinkStyle} to="/profile">
        profile
      </NavLink>
      {!adminUser && (
        <NavLink style={navLinkStyle} to="/login">
          Login
        </NavLink>
      )}
    </div>
  );
};
