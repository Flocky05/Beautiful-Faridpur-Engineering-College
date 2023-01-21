import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Navbar from "../Header/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
