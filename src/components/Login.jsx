import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "./index";
import { sginUpWithGoogle, getCurrentUser } from "../api/Auth.api";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { login as authLogin } from "../store/AuthSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        });
        const userData = (await res).data;

        const data = await sginUpWithGoogle(
          userData.email,
          userData.name,
          userData.picture,
          userData.sub
        );
        if (data) {
          const user = await getCurrentUser();
          dispatch(authLogin(user));
          console.log("user", user);
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="container-fluid login-page">
      <div className="row">
        <div className="col-4 logo text-center">
          {/* <img src="\img\BIZMO.png" alt="logo" /> */}
          <h1 className="brand-name">Bizmo</h1>
        </div>
        <div className="col-8 pt-3 link text-end px-5">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
      <div className="row mt-5  d-flex justify-content-center align-items-center">
        <div className="col-12 mt-5 login-components ">
          <div className="row">
            <div className="mt-2 col-12 d-flex justify-content-center ">
              <h6>Login</h6>
              <h6 className="mx-3 bizmo-brand-name">Bizmo</h6>
            </div>
            <div className="col-12 mt-2" onClick={login}>
              <div className="login-section ">
                <img
                  className="google-img"
                  src="\img\iconfinder-new-google-favicon-682665-removebg-preview.png"
                  alt="google-image"
                />

                <span className="mx-5">Continue with Google</span>
              </div>
            </div>
            <div className="col-12 ">
              <div className="login-section mt-3">
                <i className="ri-mail-line"></i>
                <span className="mx-5">Continue with email/username</span>
              </div>
            </div>
            <div className="col-12 d-flex pt-4">
              <div className="div">
                <span className="signup-message">Don't have an account?</span>
              </div>
              <div className="div">
                <Link to="/signup" className="">
                  <span className="signup-link">Sign Up</span>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-12 text-center d-flex justify-content-center ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Login;
