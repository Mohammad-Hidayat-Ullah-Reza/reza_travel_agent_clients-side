import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../api/auth";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import GoogleSignIn from "../Shared/GoogleSignIn/GoogleSignIn";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";

const SignUp = () => {
  const { passwordSignUp, updateUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    passwordSignUp(email, password)
      .then((result) => {
        const user = result.user;
        setAuthToken(user, navigate, from);
        form.reset();
        handleUpdateInfo(displayName, photoURL);
      })
      .catch((e) => console.log(e));
  };

  const handleUpdateInfo = (displayName, photoURL) => {
    const profile = { displayName: displayName, photoURL: photoURL };
    updateUserInfo(profile)
      .then(() => {})
      .catch((e) => console.log(e));
  };

  return (
    <form
      onSubmit={handleSignUp}
      className="md:w-1/2 lg:w-1/4 text-left mx-3 md:mx-auto mt-5 shadow-2xl p-5 border-1  rounded-xl"
    >
      <ReactHelmet value={"Sign Up"}></ReactHelmet>

      <h2 className="text-3xl font-bold dark:text-white mb-6 text-center">
        Sign Up Now !!!
      </h2>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type your name"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="photoURL"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Photo URL
        </label>
        <input
          type="text"
          name="photoURL"
          id="photoURL"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="your photoURL"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
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
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="???????????????????????????"
          required
        />
        <p className="mt-2 text-sm dark:text-white">
          Already have an account?{" "}
          <Link className="font-semibold text-blue-800" to="/login">
            Login
          </Link>
        </p>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign Up
      </button>
      <div className="flex my-3 items-center justify-between">
        <span className="w-full h-1 border-b-2 border-black"></span>
        <span className="mx-2 font-semibold">or</span>
        <span className="w-full h-1 border-b-2 border-black"></span>
      </div>
      <GoogleSignIn firstLetter={"Sign Up"}></GoogleSignIn>
    </form>
  );
};

export default SignUp;
