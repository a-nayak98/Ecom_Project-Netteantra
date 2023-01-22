import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
