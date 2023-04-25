import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const isActiveStyle = {
    textDecoration: "none",
    color: "#F64672",
  };
  const defaultStyle = {
    color: "#FFFFFF",
  };

  return (
    <nav
      className="navbar navbar-expand-sm"
      style={{ backgroundColor: "#242582" }}
    >
      <Link className="navbar-brand" to="/" style={{ color: "#FFFFFF" }}>
        Home
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            style={({ isActive }) => (isActive ? isActiveStyle : defaultStyle)}
            className="nav-item nav-link"
            to="/todos"
          >
            ToDo's
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? isActiveStyle : defaultStyle)}
            className="nav-item nav-link"
            to="/history"
          >
            History
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? isActiveStyle : defaultStyle)}
            className="nav-item nav-link"
            to="/todo-table"
          >
            Summary
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
            style={({ isActive }) => (isActive ? isActiveStyle : defaultStyle)}
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
