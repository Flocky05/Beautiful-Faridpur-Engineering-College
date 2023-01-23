import React from "react";
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Navbar from "../Header/Navbar";

const Main = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/HomePage");
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
