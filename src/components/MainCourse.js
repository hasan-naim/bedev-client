import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MainCourse() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://web-dev-course-server.vercel.app/courses")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="lg:col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {data.map((obj) => {
        return (
          <div
            key={obj.id}
            className="card card-compact  bg-base-200 shadow-xl"
          >
            <figure>
              <img src={obj.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{obj.name}!</h2>
              <p>{obj.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/courses/${obj.id}`} className="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MainCourse;
