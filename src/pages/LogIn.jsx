import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

function LogIn() {
  const { googleLogIn, logIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    logIn(email, password)
      .then((rslt) => {
        console.log(rslt.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="mt-12">
      <div className="container">
        <div className="bg-base-200 p-8 text-white w-full max-w-lg mx-auto rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <h3 className="text-gray-200 text-4xl font-semibold text-center mx-auto mb-4">
              Log In
            </h3>

            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="flex items-start mb-6">
              <label
                for="remember"
                className="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
              >
                New Here?{" "}
                <Link to="/register" className="text-blue-500 hover:underline">
                  Create an accout
                </Link>
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </form>
          <h6 className="text-gray-400 text-lg font-semibold text-center my-3 w-full">
            or
          </h6>
          <button
            onClick={handleGoogleLogIn}
            className="btn btn-outline btn-success w-full mb-3"
          >
            Google
          </button>
          <button className="btn btn-outline btn-active w-full">Github</button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
