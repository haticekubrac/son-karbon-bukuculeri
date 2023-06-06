import Logo from "/src/assets/Logo.png"
import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-white text-opacity-50">
      <div className="container-fluid">
        <img
          style={{
            position: "relative",
            zIndex: "1",
            width: "70px",
            height: "70px",
          }}
          className="me-2 "
          src={Logo}
          alt="HHHH"
        />
        <a className="navbar-brand sm:text-center" href="#">
          <b>CarbonWise</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text cool-link"
                href="index.html#blog"
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text cool-link"
                href="index.html#blog"
              >
                SSS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text cool-link"
                aria-current="page"
                href="#"
              >
                Mağaza
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link active text cool-link"
                href="hakkımızda.html"
              >
                Hakkımızda
              </a>
            </li>
            <li className="nav-item">
              {/* {login} */}
              <button
                className="nav-link active text cool-link login-btn"
                onClick={() =>
                  (document.getElementById("id01").style.display = "block")
                }
              >
                Giriş
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
