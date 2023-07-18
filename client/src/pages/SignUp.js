import React from "react";
import Logo from "../img/logo.svg";

export const SignUp = () => {
  return (
    <div className="mt-20 m-5">
      <section className="py-24 lg:py-28 bg-gray-800 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading mb-4 text-6xl text-white tracking-tighter">
              Create an account
            </h2>
            <p className="mb-16 text-xl text-white tracking-tight">
              Use and re-use tons of responsive sections too a main create the
              perfect layout. Sections are ready.
            </p>
            <form className="flex flex-wrap -m-3" action="#">
              <div className="w-full md:w-1/2 p-3">
                <label className="block">
                  <input
                    className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200"
                    id="signUpInput1-1"
                    type="text"
                    placeholder="First Name"
                  />
                </label>
              </div>
              <div className="w-full md:w-1/2 p-3">
                <label className="block">
                  <input
                    className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200"
                    id="signUpInput1-2"
                    type="email"
                    placeholder="Email Address"
                  />
                </label>
              </div>
              <div className="w-full md:w-1/2 p-3">
                <label className="block">
                  <input
                    className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200"
                    id="signUpInput1-3"
                    type="password"
                    placeholder="Password"
                  />
                </label>
              </div>
              <div className="w-full md:w-1/2 p-3">
                <label className="block">
                  <input
                    className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200"
                    id="signUpInput1-4"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </label>
              </div>
              <div className="w-full p-3">
                <div className="relative flex p-px bg-transparent overflow-hidden rounded-lg">
                </div>
              </div>
              <div className="w-full p-3">
                <a
                  className="inline-block mb-7 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                  href="#"
                >
                  Create Free Account
                </a>
                <span className="font-medium text-white tracking-tight">
                  <span>Already have an account?</span>
                  <a
                    className="text-red-500 hover:text-red-700 transition duration-200"
                    href="/login"
                  >
                    Sign In
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
