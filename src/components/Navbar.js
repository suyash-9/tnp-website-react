import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      ></link>
      <div
        className=""
        style={{
          width: "100%",
          height: "600px",
          margin: 0,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(https://www.iiitnr.ac.in/sites/default/files/homepage_banner/WhatsApp%20Image%202020-04-29%20at%2012.51.36%20PM.jpeg)`,
        }}
      >
        <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong p-4 ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Home
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Academic
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Our Recruiters
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Why Us?
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Statistics
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Student
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              {/* <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
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
