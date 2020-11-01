import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'

const Navbar = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Bug Tracker 🐛
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbarName-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li class="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link">Sign In</Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Router>
  );
};

export default Navbar;
