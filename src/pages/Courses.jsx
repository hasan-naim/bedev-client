import React from "react";
import MainCourse from "../components/MainCourse";
import Sidebar from "../components/Sidebar";

function Courses() {
  return (
    <div className="mt-8 pb-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <Sidebar></Sidebar>
          <MainCourse></MainCourse>
        </div>
      </div>
    </div>
  );
}

export default Courses;
