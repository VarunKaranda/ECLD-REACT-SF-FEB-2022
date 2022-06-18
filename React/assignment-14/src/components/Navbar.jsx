import React from "react";
import "./Style.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    //  Nav Bar
    <section className="colored-section" id="title">
      <div className="container-fluid-nav">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand" to="/">
            tindog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/download">
                  Download
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
