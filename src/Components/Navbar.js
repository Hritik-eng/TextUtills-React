import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/"> */}
          <a className="navbar-brand" href="#">
            {/* we use Link instead of anchor tag a and to instead of href so that
            the page would not be reload when we go from one page (component) to
            other. */}
            {props.title}
            {/* </Link> */}
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/"> */}
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                  {/* </Link> */}
                </a>
              </li>
              <li className="nav-item">
                 {/* <Link className="nav-link" to="/About">
                {props.aboutText}  // or About
                </Link> */}
              </li>
            </ul>
           
           <div className="d-flex">
          <div className="bg -primary rounded mx-2" style={{height:'30px',width:'30px'}}></div>

           </div>
            <div
              class={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                forHTML="flexSwitchCheckDefault"
              >
                Enable dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
