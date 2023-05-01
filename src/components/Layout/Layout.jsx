import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import NavBar from "../NavBar";

const Layout = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const c = pathname === "/login" || pathname === "register";
  console.log(c)
  return (
    <>
      {(c !=true) && <Header />}
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
