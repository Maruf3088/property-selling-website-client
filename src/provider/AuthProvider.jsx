import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import React, { useEffect, useState, createContext } from "react";
import auth from "../firebase/firebase.init";
import axiosPublic from "../axios/axiosPublic";
import { setLogoutFunction } from "../axios/axiosSecure";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleAuthProvider = new GoogleAuthProvider();

  /* ---------- AUTH METHODS ---------- */
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = async (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = async () => {
    setLoading(true);

    return signInWithPopup(auth, googleAuthProvider);
  };
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const emailVarification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  /* ---------- LOGOUT (IMPORTANT FIX) ---------- */
  const logout = async () => {
    setLoading(true);

    await signOut(auth);
    setUser(null);
    setLoading(false);
  };

  // Register logout function with axiosSecure on component mount
  useEffect(() => {
    setLogoutFunction(logout);
  }, [logout]);

  /* ---------- AUTH STATE LISTENER ---------- */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);

      if (currentUser) {
        try {
          const res = await axiosPublic.post("/jwt", {
            email: currentUser.email,
          });
          console.log(currentUser)

          if (res.data?.token) {
            localStorage.setItem("access-token", res.data.token);
          }
          // Set user AFTER token is saved to prevent 401 errors
          setUser(currentUser);
        } catch (err) {
          console.error("JWT error:", err);
          // Still set user even if JWT fetch fails
          setUser(currentUser);
        }
      } else {
        localStorage.removeItem("access-token");
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    updateUser,
    emailVarification,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
