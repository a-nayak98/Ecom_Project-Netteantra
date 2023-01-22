import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
// import { Link } from "react-router-dom";

const LogIn = () => {
  const initialLoginState = { email: "", password: "" };
  const initialRegisterState = {
    name: "",
    email: "",
    password: "",
  };
  const [showsSignup, setShowsSignup] = useState(false);
  const [loginUser, setLoginUser] = useState(initialLoginState);
  const [registerUser, setRegisterUser] = useState(initialRegisterState);

  // console.log(loginUser);

  const changeLoginUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newUser = { ...loginUser };
    newUser[name] = value;
    setLoginUser(newUser);
    // setLoginUser({ [e.target.name]: e.target.value }); => another way
  };

  const changeRegisterUser = (e) => {
    const keyOfObject = e.target.name;
    const valueOfObject = e.target.value;
    const newRegisterUser = { ...registerUser };
    newRegisterUser[keyOfObject] = valueOfObject;
    setRegisterUser(newRegisterUser);
    console.log(keyOfObject, valueOfObject);
  };

  const handleRegisterSubmit = () => {
    const registredUserData = { ...registerUser };
    registredUserData["name"] = "";
    registredUserData["email"] = "";
    registredUserData["password"] = "";
    setRegisterUser(registredUserData);
  };

  const handleLoginSubmit = () => {
    // api call
    const userData = { ...loginUser };
    userData["email"] = "";
    userData["password"] = "";
    setLoginUser(userData);
    // setLoginUser(initialLoginState); => another way
  };

  const changeLoginState = (flag) => {
    setShowsSignup(flag);
  };

  return (
    <>
      <section className="loginPage">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="loginLeftBox">
                <img src="/images/3 (1).jpg" alt="image not found" />
                <div className="loginLeftBox-imageOverlay"></div>
                <div className="loginLeftBox-overlayItem">
                  <img
                    className="login-logo"
                    src="/images/Flipkart-Emblem.png"
                    alt=""
                  />
                  {/* <h3>Flipcart Ab shoping hoga Dhoom dham se</h3> */}
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="loginRightBox">
                {!showsSignup ? (
                  <Login
                    loginUserObject={loginUser}
                    changeLoginUser={changeLoginUser}
                    changeState={() => changeLoginState(true)}
                    handleSubmit={handleLoginSubmit}
                  />
                ) : (
                  <Register
                    registredUserObject={registerUser}
                    changeRegisterUser={changeRegisterUser}
                    changeState={() => changeLoginState(false)}
                    handleRegisterSubmit={handleRegisterSubmit}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;
