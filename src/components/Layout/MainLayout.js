import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
