import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "../Buttons/Cart";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
        <div className="container-fluid">
          <NavLink to="/" className="store-name navbar-brand fs-3 fw-bold">
            <img
              src="/ecommercesite/assets/logo.png"
              className="w-75"
              alt="boat logo"
            />
          </NavLink>
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
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav mb-2 mb-lg-0 mx-auto"
              style={{ marginLeft: "50px" }}
            >
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">
                  About-Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact-Us
                </NavLink>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <Cart />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
