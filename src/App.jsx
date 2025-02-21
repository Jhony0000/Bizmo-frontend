import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getCurrentUser } from "./api/Auth.api";
import { login, logout } from "./store/AuthSlice";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);

  console.log("Redux userData:", userData);

  useEffect(() => {
    getCurrentUser().then((user) => {
      console.log("Fetched user data:", user);
      if (user) {
        dispatch(login({ user }));
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return userData ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
