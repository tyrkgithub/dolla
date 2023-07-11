// importing various folders/libraries to use here
import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import LogoImg from "../../assets/logoNameClear.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <ul className="navbar-logo">
            <li
              className="nav-logo"
              style={{ backgroundImage: `url(${LogoImg})` }}
            ></li>
          </ul>
          <ul className="navbar-item-nav">
          <ul className="navbar-item">
            <li className="nav-item">
              <NavLink
                to="/pricing"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                PRICING
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                BOOKING
              </NavLink>
            </li>
          </ul>
          </ul>
        </ul>
      </div>
    </nav>
  );
}

//exports the file to be used elsewhere
export default Navbar;
