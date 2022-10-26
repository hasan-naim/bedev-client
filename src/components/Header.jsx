import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.png";
import { AuthContext } from "../contexts/AuthProvider";

function Header() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-base-200">
      <div className="container ">
        <div className="navbar bg-base-200">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-3"
              >
                <li>
                  <Link to={"/courses"}>Courses</Link>
                </li>
                <li>
                  <Link to={"/faq"}>FAQ</Link>
                </li>
                <li>
                  <Link to={"/blog"}>Blog</Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              <img src={Logo} className="mr-3" alt="logo" />
              BeDev
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 space-x-3">
              <li>
                <Link to={"/courses"}>Courses</Link>
              </li>
              <li>
                <Link to={"/faq"}>FAQ</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {user?.uid ? (
              <>
                <div className="relative">
                  <div
                    id="tooltip-jese"
                    role="tooltip"
                    class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-gray-200 bg-gray-600 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-600"
                  >
                    {/* {user?.displayName} */}
                    Hasan Naim
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  {user?.photoURL ? (
                    <img
                      data-tooltip-target="tooltip-jese"
                      class="w-10 h-10 rounded mr-3"
                      src={user?.photoURL}
                      alt="Medium avatar"
                      title={user?.displayName && user.displayName}
                    />
                  ) : (
                    <svg
                      class="mr-3 bg-gray-600 rounded-full p-1 w-10 h-10 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  )}
                </div>
                <button onClick={handleLogOut} className="btn">
                  Log Out
                </button>
              </>
            ) : (
              <Link to={"/login"} className="btn">
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
