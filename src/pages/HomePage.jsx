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
      <div className="row">
        <div className="col-12 hero_section">
          <div className="div ">
            <button className="hero_btn">Man</button>
            <button className="hero_btn">Woman</button>
            <button className="hero_btn">Children</button>
          </div>
        </div>
      </div>
      <div className="row text-center ">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
