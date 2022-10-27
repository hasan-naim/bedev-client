import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function DetailsPage() {
  const data = useLoaderData();

  return (
    <div className="grid-cols col-span-4">
      <div>
        <div className="flex">
          <h1 className="text-5xl text-gray-200 font-semibold w-full mb-12">
            {data.name}
          </h1>
          <button className="btn btn-primary border-red-600 hover:border-red-700 outline-red-600 bg-red-600 hover:bg-red-700">
            Download Pdf
          </button>
        </div>

        <img className="w-full rounded-lg mb-12" src={data.img} alt="" />
        <p>{data.details}</p>
        <div className="mt-12 space-x-4 text-center">
          <Link to={``} className="btn btn-primary">
            Purchase
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
