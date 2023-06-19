import React, { useState } from "react";
import { Link } from "react-router-dom";

function BottomNavigation() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (e) => {
    setActiveLink(e.target.innerText);
  };
  return (
    <nav
      className="navbar fixed-bottom navbar-expand-lg bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "Trending" ? 'active aria-current="page"' : ""
                }`}
                onClick={handleClick}
                to="/"
              >
                Trending
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "Movies" ? 'active aria-current="page"' : ""
                }`}
                onClick={handleClick}
                to="/Movies"
              >
                Movie
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "Tv Series" ? 'active aria-current="page"' : ""
                }`}
                onClick={handleClick}
                to="/Tv Series"
              >
                Tv Series
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "Search" ? 'active aria-current="page"' : ""
                }`}
                onClick={handleClick}
                to="/Search"
              >
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default BottomNavigation;
