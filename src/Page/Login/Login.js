import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import GoogleSignIn from "../Shared/GoogleSignIn/GoogleSignIn";

const Login = () => {
  const { passwordSignIn } = useContext(AuthContext);

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    passwordSignIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((e) => console.log(e));
  };
  return (
    <form
      onSubmit={handleSignIn}
      className="w-1/4 text-left mx-auto mt-5 shadow-2xl p-5 border-1  rounded-xl"
    >
      <h2 className="text-3xl font-bold dark:text-white mb-6 text-center">
        Login Now !!!
      </h2>
      <div className="mb-6">
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="john.doe@company.com"
          required
        />
      </div>
      <div className="mb-6">
        <label
          for="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="•••••••••"
          required
        />
        <p className="mt-2 text-sm dark:text-white">
          Don't have an account?{" "}
          <Link className="font-semibold text-blue-800" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login
      </button>
      <div className="flex my-3 items-center justify-between">
        <span className="w-full h-1 border-b-2 border-black"></span>
        <span className="mx-2 font-semibold">or</span>
        <span className="w-full h-1 border-b-2 border-black"></span>
      </div>
      <GoogleSignIn firstLetter={"Login"}></GoogleSignIn>
    </form>
  );
};

export default Login;
