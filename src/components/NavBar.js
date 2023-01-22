import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill, BsSearch } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-6 col-4">
            <Link to="/">
              <img
                src="/images/Flipkart-logo.png"
                alt=""
                className="nav_logo"
              />
            </Link>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-6 col-6 align_center">
            <div className="nav_searchBox">
              <input
                className="serchBox_input"
                type="text"
                placeholder="Search"
              />
              <BsSearch className="serchBox_logo" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12 align_center">
            <div className="nav_btns">
              <Link to="/login">
                <button className="login_btn" type="button">
                  Login
                </button>
              </Link>
              <Link to="/cart">
                <span className="cart_iconBox">
                  <BsFillCartFill className="cart_icon" />
                  Cart
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
