import React, { useEffect, useState } from "react";
import BlackMan from "../img/black_man.png";
import Axios from "axios";
import GoogleButtonLogin from "../components/Google/GoogleButton";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState({});

  const handlelogin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/api/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        const accountData = response.data[1];
        setAccount(accountData);
        sessionStorage.setItem("user", JSON.stringify(accountData)); // Lưu thông tin đăng nhập vào session storage
        console.log(account);
    })
      .catch((error) => {
        console.log(error);
    });
  };

  return (
    <div className="mt-20 m-5">
      <section className="flex flex-col md:flex-row h-screen items-center">
        {/* background left */}
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img src={BlackMan} alt="" className="w-full h-full object-cover" />
        </div>
        {/* background form */}
        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
  flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>
            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoComplete=""
                  required=""
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
                  required=""
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6"
                onClick={handlelogin}
              >
                Log In
              </button>
            </form>
            <hr className="my-6 border-gray-300 w-full" />
            <div className="flex items-center justify-center">
              <GoogleButtonLogin />
            </div>
            <p className="mt-8">
              Need an account?{" "}
              <a
                href="/signUp"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
