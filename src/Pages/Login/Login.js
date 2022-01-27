import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const { signInWithGoogle, registerUser, authError, loginUser } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };

  const handleRegister = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    registerUser(email, password, name, navigate);
  };

  const handleLogin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    loginUser(email, password, location, navigate);
  };

  return (
    <div>
      <Header></Header>
      {newUser ? (
        <div className="mt-10">
          <p className="text-3xl font-medium text-center mb-5 text-gray-700">
            Please Register
          </p>
          <div className="flex justify-center">
            <div>
              <div className="form-floating mb-3 xl:w-96">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="name"
                  placeholder="name"
                />
                <label className="text-gray-700">Name</label>
              </div>
              <div className="form-floating mb-3 xl:w-96">
                <input
                  type="email"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="email"
                  placeholder="name@example.com"
                />
                <label className="text-gray-700">Email address</label>
              </div>
              <div className="form-floating mb-3 xl:w-96">
                <input
                  type="password"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="password"
                  placeholder="Password"
                />
                <label className="text-gray-700">Password</label>
              </div>
            </div>
          </div>
          {authError && (
            <div className="flex justify-center">
              <div
                class="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center xl:w-96"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="times-circle"
                  class="w-4 h-4 mr-2 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                  ></path>
                </svg>
                {authError}
              </div>
            </div>
          )}
          <div className="flex justify-center">
            <button
              onClick={handleGoogleSignIn}
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="#fcd34d"
              data-mdb-ripple-duration="1000ms"
              className="text-left p-2.5 leading-tight transition duration-150 ease-in-out font-medium uppercase hover:bg-orange-50 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-google"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
              </svg>
            </button>
            <button
              onClick={handleRegister}
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="#fcd34d"
              data-mdb-ripple-duration="1000ms"
              className="text-left p-2.5 leading-tight transition duration-150 ease-in-out font-medium uppercase hover:bg-orange-50 rounded-md"
            >
              Register
            </button>
          </div>
          <div className="text-center mt-5">
            Have an account?{" "}
            <span
              onClick={() => {
                setNewUser(false);
              }}
              className="cursor-pointer underline hover:text-amber-600 decoration-amber-600 hover:decoration-amber-800 font-medium"
            >
              Login here!
            </span>
          </div>
        </div>
      ) : (
        <div className="mt-10">
          <p className="text-3xl font-medium text-center mb-5 text-gray-700">
            Please Login
          </p>
          <div className="flex justify-center">
            <div>
              <div className="form-floating mb-3 xl:w-96">
                <input
                  type="email"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="email"
                  placeholder="name@example.com"
                />
                <label className="text-gray-700">Email address</label>
              </div>
              <div className="form-floating mb-3 xl:w-96">
                <input
                  type="password"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="password"
                  placeholder="Password"
                />
                <label className="text-gray-700">Password</label>
              </div>
            </div>
          </div>
          {authError && (
            <div className="flex justify-center">
              <div
                class="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center xl:w-96"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="times-circle"
                  class="w-4 h-4 mr-2 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                  ></path>
                </svg>
                {authError}
              </div>
            </div>
          )}
          <div className="flex justify-center">
            <button
              onClick={handleGoogleSignIn}
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="#fcd34d"
              data-mdb-ripple-duration="1000ms"
              className="text-left p-2.5 leading-tight transition duration-150 ease-in-out font-medium uppercase hover:bg-orange-50 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-google"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
              </svg>
            </button>
            <button
              onClick={handleLogin}
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="#fcd34d"
              data-mdb-ripple-duration="1000ms"
              className="text-left p-2.5 leading-tight transition duration-150 ease-in-out font-medium uppercase hover:bg-orange-50 rounded-md"
            >
              Login
            </button>
          </div>
          <div className="text-center mt-5">
            Don't have an account?{" "}
            <span
              onClick={() => {
                setNewUser(true);
              }}
              className="cursor-pointer underline hover:text-amber-600 decoration-amber-600 hover:decoration-amber-800 font-medium"
            >
              Create now!
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
