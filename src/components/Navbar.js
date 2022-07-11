import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../resources/logo.png';

function Navbar() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      ></link>
      <div className="" style={{
        width: '100%',
        height:"600px",
        margin:0,
        backgroundSize: "100% 100%",
        backgroundRepeat:"no-repeat",
        backgroundImage: `url(https://www.iiitnr.ac.in/sites/default/files/homepage_banner/WhatsApp%20Image%202020-04-29%20at%2012.51.36%20PM.jpeg)`
      }}>
        <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong p-4 ">
          <div className="container-fluid">
            <a class="navbar-brand" href="https://www.iiitnr.ac.in/">
              <img src={logo} alt="" width="35" height="35" class="d-inline-block align-text-top"/>
                Home
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
                  <a className="nav-link active" aria-current="page" href="#">
                    Academic
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Our Recruiters
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Why Us?
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Statistics
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Student
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#contact">
                    Contact Us
                  </a>
                </li>
                
                {/* 
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="https://www.iiitnr.ac.in/">
                    <img src={logo} width="50px" height="50px" className="logo"/>
                  </a>
                </li> */}
               
              </ul>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;