import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Login = ({
  changeState,
  changeLoginUser,
  handleSubmit,
  loginUserObject,
}) => {
  return (
    <div className="loginRightBoxTop">
      <div className="loginBox-heading">
        <h3>Sign In</h3>
        <p>Get Access to your Orders, Wishlist and Recommendations</p>
      </div>
      <form action="#">
        <label htmlFor="email">Enter Email</label>
        <div className="formInputs">
          <input
            name="email"
            type="text"
            placeholder="Enter your Email"
            onChange={changeLoginUser}
            value={loginUserObject.email}
          />
          <span>
            <HiOutlineMail />
          </span>
        </div>
        <label htmlFor="email">Enter Password</label>
        <div className="formInputs">
          <input
            name="password"
            type="text"
            placeholder="Enter your password"
            onChange={changeLoginUser}
            value={loginUserObject.password}
          />
          <span>
            <HiOutlineMail />
          </span>
        </div>
      </form>
      <p>
        <small>
          By Continuing, you agree to Flipkart's <a href="#">Terms of use</a>{" "}
          and <a href="#">Privacy Policy</a>.
        </small>
      </p>
      <button className="bgBuyNow" onClick={handleSubmit}>
        Sign In
      </button>
      <p className="btn-signIn" onClick={() => changeState()}>
        New to Flipkart? Create an account
      </p>
    </div>
  );
};

export default Login;
