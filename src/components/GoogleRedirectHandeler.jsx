import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchGoogleUser } from "../api/Auth.api";
import { login } from "../store/AuthSlice";

const GoogleRedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(location.search);

  //   if (urlParams.has("code")) {
  //     const code = urlParams.get("code"); // Get the authorization code from URL
  //     console.log("Authorization Code:", code);

  //     // Call the backend to exchange code for user data
  //     fetchGoogleUser()
  //       .then((userData) => {
  //         if (userData) {
  //           console.log("User Data:", userData);
  //           dispatch(login(userData)); // Store user data in Redux
  //           navigate("/"); // Redirect to dashboard or home
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Google Auth Error:", error);
  //         navigate("/error"); // Redirect in case of failure
  //       });
  //   }
  // }, [location, dispatch, navigate]);

  return <div>Redirecting...</div>;
};

export default GoogleRedirectHandler;
