import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg  bg-stone-600 ">
        <h1 className="text-3xl font-semibold text-center text-stone-200">
          Login
          <span className="text-teal-400">Yapper</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <a
            href="#"
            className="text-sm hover:underline hover:text-teal-400 mt-2 inline-block"
          >
            {" "}
            {"Don't"} have a account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
