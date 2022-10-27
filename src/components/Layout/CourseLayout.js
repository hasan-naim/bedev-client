import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

function CourseLayout() {
  return (
    <div>
      <div className="mt-8 pb-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            <Sidebar></Sidebar>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseLayout;
