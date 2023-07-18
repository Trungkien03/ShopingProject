import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="lg:hidden">
        <div className="relative">
          <div
            className="m-3 hover:text-blue-300 cursor-pointer"
            onClick={toggleDropdown}
          >
            <svg
              className="w-10 h-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </div>
          {isOpen && (
            <div
              className="absolute top-full text-xl left-1/2 transform -translate-x-1/2 text-center py-2 w-80 rounded-md shadow-lg z-10 transition"
              id="dropdownMenu"
            >
              <div className="p-2">
                <Link to={"/"}>Home</Link>
              </div>
              <div className="p-2">
                <Link to={"/about"}>About Us</Link>
              </div>
              <div className="p-2">
                <Link to={"/allProducts"}>Products</Link>
              </div>
              <div className="p-2">
                <Link to={"/contact"}>Contact</Link>
              </div>
              <div className="p-2">
                <Link to={"/login"}>Login</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden lg:flex gap-20">
        <div className="hover:text-blue-300">
          <Link to={"/"}> Home </Link>
        </div>
        <div className="hover:text-blue-300">
          <Link to={"/about"}>About Us</Link>
        </div>
        <div className="hover:text-blue-300">
          <Link to={"/allProducts"}>Products</Link>
        </div>
        <div className="hover:text-blue-300">
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div className="relative hidden md:block bottom-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>

        
        
      </div>
    </div>
  );
};
