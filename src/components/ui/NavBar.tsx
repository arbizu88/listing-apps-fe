import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const isActiveStyle = {
    textDecoration: "none",
    color: "red",
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Home
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            style={({ isActive }) => (isActive ? isActiveStyle : {})}
            className="nav-item nav-link"
            to="/todos"
          >
            Todos
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? isActiveStyle : {})}
            className="nav-item nav-link"
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? isActiveStyle : {})}
            className="nav-item nav-link"
            to="/history"
          >
            history
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
            style={({ isActive }) => (isActive ? isActiveStyle : {})}
            className="nav-item nav-link"
            to="/login"
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
