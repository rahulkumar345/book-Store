import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/Context";
import bookTemplate from "../assets/book template.png";
import cartSvg from "../assets/cart.svg";
import Search from "./Search";

const Navbar = () => {
  const { carts } = useContext(Context);
  const location = useLocation();
  const showSearch = location.pathname === "/";

  return (
    <div className="bg-white border-bottom sticky-top shadow-sm p-3 px-md-4 mb-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-md-center">
        <div className="d-flex align-items-center">
          <Link
            className="navbar-brand fw-normal text-dark d-flex align-items-center mb-3 mb-md-0"
            style={{
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "3rem",
              fontFamily: "Source Code Pro, monospace",
            }}
            to="/"
          >
            <img src={bookTemplate} alt="Book Store App" height="100px" />
            <span
              style={{
                fontWeight: 500,
                fontSize: "2rem",
                fontFamily: "Source Code Pro, monospace",
              }}
            >
              Book Store
            </span>
          </Link>
        </div>

        {showSearch && <Search />}

        <div className="d-flex flex-column flex-md-row align-items-center mt-3 mt-md-0">
          <nav className="ml-auto mb-3 mb-md-0">
            <Link
              className="nav-link text-dark"
              style={{
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "2rem",
                fontFamily: "Source Code Pro, monospace",
              }}
              to="/about"
            >
              About
            </Link>
          </nav>

          <div className="position-relative">
            <Link
              className="btn btn-outline-primary"
              style={{
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1rem",
                fontFamily: "Source Code Pro, monospace",
              }}
              to="/book-cart"
            >
              <img src={cartSvg} alt="Cart" />
            </Link>
            {carts.length !== 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {carts.length}
                <span className="visually-hidden">items in cart</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
