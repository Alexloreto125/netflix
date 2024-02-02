import React from "react";
import netflixLogo from "../assets/imgs/netflix_logo.png";
import "./navbarNetflix.css";
import { IconContext } from "react-icons";
import * as BootstrapIcons from "react-icons";
import { BsSearchHeart } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

// import Anchor from "react-bootstrap";
const NavbarNetflix = () => {
  return (
    <IconContext.Provider value={{ className: "icons", color: "#FF00FF" }}>
      <header>
        <nav
          className="navbar navbar-expand-lg bg-dark"
          data-bs-theme="dark"
          // style={{ backgroundColor: "#221f1f" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src={netflixLogo}
                alt="logo"
                style={{ width: "100px", height: "55px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              color="#FF00FF"
            >
              <span>
                <IoMenu />
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                style={{ color: "#FF00FF" }}
              >
                <li className="nav-item">
                  <a
                    className="nav-link active fw-bold"
                    href="/"
                    style={{ color: "#FF00FF" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold"
                    href="/"
                    style={{ color: "#FF00FF" }}
                  >
                    TV Shows
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold"
                    href="/"
                    style={{ color: "#FF00FF" }}
                  >
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold"
                    href="/"
                    style={{ color: "#FF00FF" }}
                  >
                    Recently Added
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold"
                    href="/"
                    style={{ color: "#FF00FF" }}
                  >
                    My List
                  </a>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <BsSearchHeart />
                <div
                  id="kids"
                  className="fw-bold "
                  style={{ color: "#FF00FF" }}
                >
                  KIDS
                </div>
                <CiBellOn />
                <FaRegUserCircle />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </IconContext.Provider>
  );
};

export default NavbarNetflix;
