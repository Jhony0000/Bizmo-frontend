import React from "react";
import { Input, Button } from "../index";
import { useSelector } from "react-redux";

function Header() {
  const userData = useSelector((state) => state.auth.userData);

  return (
    <div className="header d-flex justify-content-around">
      <div className="div header-logo-serchbar-serch-icon d-sm-flex">
        <i className="mx-2 ri-menu-2-fill mx-2 mt-2 d-lg-none home_page_manue-icon"></i>
        <h1 className="brand-name">Bizmo</h1>
        <Input placeHolder={"Search"} className="mt-3 nav-serch-bar mx-3" />
        <div className="search-icon">
          <i className="ri-search-line"></i>
        </div>
      </div>
      <div className="div   d-flex header-order-bussiness-profileImg-section">
        <div className="div d-none d-md-block mt-3">
          <i className="  ri-notification-4-line header-icon "></i>
          <i className="ri-mail-line header-icon mx-4"></i>
          <i className="ri-heart-line header-icon "></i>
        </div>
        <div className="d-flex mx-3 w-50 ">
          <Button className="d-none d-lg-block order-btn">Orders</Button>
          <Button className="business-btn mx-4 d-none d-sm-block  text-truncate">
            Switch to business
          </Button>
          <img
            className="profile_photo d-none d-sm-block"
            src={`${
              userData.user.profile_photo ? userData.user.profile_photo : ""
            }`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
