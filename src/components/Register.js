import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Register = ({
  changeState,
  changeRegisterUser,
  handleRegisterSubmit,
  registredUserObject,
}) => {
  return (
    <div className="loginRightBoxBottom ">
      <div className="loginBox-heading">
        <h3>Sign Up</h3>
        <p>Get Access to your Orders,Wishlist and Recommendations</p>
      </div>
      <form action="#">
        <label htmlFor="name">Enter Your Name</label>
        <div className="formInputs">
          <input
            type="text"
            name="name"
            value={registredUserObject.name}
            placeholder="Enter your Name."
            onChange={changeRegisterUser}
          />
          <span>
            <HiOutlineMail />
          </span>
        </div>
        <label htmlFor="name">Enter Your Email</label>
        <div className="formInputs">
          <input
            type="text"
            name="email"
            value={registredUserObject.email}
            placeholder="Enter your Email/Mobile No."
            onChange={changeRegisterUser}
          />
          <span>
            <HiOutlineMail />
          </span>
        </div>
        <label htmlFor="name">Enter Your Password</label>
        <div className="formInputs">
          <input
            type="text"
            name="password"
            value={registredUserObject.password}
            onChange={changeRegisterUser}
            placeholder="Enter your Password"
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
      <button className="bgBuyNow" onClick={() => handleRegisterSubmit()}>
        Sign Up
      </button>
      <p className="btn-signIn" onClick={() => changeState()}>
        Already have an account? sign in
      </p>
    </div>
  );
};

export default Register;
