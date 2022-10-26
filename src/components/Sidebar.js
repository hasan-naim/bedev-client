import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="lg:col-span-2 bg-base-200 rounded-lg p-6">
      <h3 className="text-4xl text-gray-300 font-semibold text-center mb-4">
        List of Course
      </h3>
      <ul className="menu  w-full p-2 rounded-box">
        <li>
          <Link>Item 1</Link>
        </li>
        <li>
          <Link>Item 2</Link>
        </li>
        <li>
          <Link>Item 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
