import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Footer, Header } from "../components";

function HomePage() {
  const userData = useSelector((state) => state.auth.userData);
  console.log("home page user data", userData);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row"></div>
      <div className="row text-center ">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
