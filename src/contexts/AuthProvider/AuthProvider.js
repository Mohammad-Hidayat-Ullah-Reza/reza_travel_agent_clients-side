import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const passwordSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const passwordSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserInfo = (updateInfo) => {
    return updateProfile(auth.currentUser, updateInfo);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    signInGoogle,
    passwordSignUp,
    passwordSignIn,
    updateUserInfo,
    logOut,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
