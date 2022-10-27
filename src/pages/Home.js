import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

function Home() {
  return (
    <div className="pt-16">
      <div className="container text-center">
        <h1 class="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          Welcome to Tutorial Hub
        </h1>
        <p class="mt-6 text-lg text-slate-400 text-center max-w-3xl mx-auto dark:text-slate-400">
          Here you will find tutorial about web development. You can learn
          everything about web development.
        </p>
        <Link to={`/courses`} className="btn btn-primary mt-6">
          Courses
        </Link>
      </div>
    </div>
  );
}

export default Home;
