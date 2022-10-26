import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

function Register() {
  const { googleLogIn } = useContext(AuthContext);

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="mt-12">
      <div className="container">
        <div className="bg-base-200 p-8 text-white w-full max-w-lg mx-auto rounded-lg shadow-lg">
          <form>
            <h3 className="text-gray-200 text-4xl font-semibold text-center mx-auto mb-4">
              Register
            </h3>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
              >
                Your Name{" "}
              </label>
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Full Name"
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
              >
                Your image Url
              </label>
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Url"
                required=""
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div class="flex items-start mb-6">
              <label
                for="remember"
                class="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
              >
                Have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Log In
                </Link>
              </label>
            </div>
            <button className="btn btn-primary w-full">Submit</button>
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

export default Register;
