import { Link } from "react-router-dom";
// import Signup from "../signup/Signup.jsx";
import useLogin from "../../hooks/useLogin.js";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await login({ username, password });
  };
  return (
    <div className="mx-auto flex flex-col items-center justify-center min-w-96">
      <div className="w-full rounded-lg bg-stone-600 p-6">
        <h1 className="text-center text-3xl font-semibold text-stone-200">
          Login
          {/* <span className="text-teal-400">Yapper</span> */}
        </h1>

        <form onSubmit={handleLoginSubmit}>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              className="w-full max-w-xs input input-bordered input-primary"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full max-w-xs input input-bordered input-primary"
            />
          </div>

          <Link
            to="/signup"
            className="mt-2 inline-block text-sm hover:text-teal-400 hover:underline"
          >
            {" "}
            {"Don't"} have a account?
          </Link>
          <div>
            <button
              disabled={loading}
              className="mt-2 btn btn-block btn-sm btn-primary"
            >
              {loading ? (
                <span className="loading loading-spinner"> </span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
