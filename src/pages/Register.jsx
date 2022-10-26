import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

function Register() {
  const { createUser, updetUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  console.log(email);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    createUser(email, password)
      .then((rslt) => {
        form.reset();
        console.log(rslt.user);
        updetUser({
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {})
          .catch((err) => {
            setError(err.message);
          });
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };

  return (
    <div className="mt-12">
      <div className="container">
        <div className="bg-base-200 p-8 text-white w-full max-w-lg mx-auto rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <h3 className="text-gray-200 text-4xl font-semibold text-center mx-auto mb-4">
              Register
            </h3>
            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
              >
                Your Name{" "}
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
              >
                Your image Url
              </label>
              <input
                onChange={(e) => setPhotoUrl(e.target.value)}
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Url"
                required=""
              />
            </div>
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
                Have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Log In
                </Link>
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
            {error && <p className="text-red-500 mt-2">Error: {error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
