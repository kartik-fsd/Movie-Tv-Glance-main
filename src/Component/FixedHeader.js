import React from "react";
import svg from "./film.svg";

function FixedHeader() {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid  justify-content-center">
        <a
          className="navbar-brand"
          href="/"
          onClick={() => window.scroll(0, 0)}
        >
          <img
            src={svg}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          TRENDINGFLIX
        </a>
      </div>
    </nav>
  );
}

export default FixedHeader;
