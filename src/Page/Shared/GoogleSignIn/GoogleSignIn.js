import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../../api/auth";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const GoogleSignIn = ({ firstLetter }) => {
  const { signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        setAuthToken(user, navigate, from);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div
      onClick={handleGoogleSignIn}
      className="text-black bg-yellow-200 hover:bg-yellow-300
       hover:cursor-pointer font-semibold rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 flex items-center justify-center"
    >
      <FcGoogle className="w-5 h-5 mr-2"></FcGoogle>
      <span>{firstLetter} With Google</span>
    </div>
  );
};

export default GoogleSignIn;
