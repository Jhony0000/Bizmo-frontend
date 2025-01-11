import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function App() {
  const userData = useSelector((state) => state.auth.userData);
  return userData ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <Outlet />
  );
}

export default App;
