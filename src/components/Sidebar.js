import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://web-dev-course-server.vercel.app/catagories")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="lg:col-span-2 bg-base-200 rounded-lg p-6">
      <h3 className="text-4xl text-gray-300 font-semibold text-center mb-4">
        List of Course
      </h3>
      <ul className="menu  w-full p-2 rounded-box">
        {data.map((obj) => {
          return (
            <li key={obj.id}>
              <Link to={`/courses/${obj.id}`}>{obj.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
