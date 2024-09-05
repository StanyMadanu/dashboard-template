import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdNotifications } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const Header = ({ setToggleStatus, toggleStatus }) => {
  return (
    <section className="header-main mb-4 fixed-top top-0 left-0 right-0">
      <div className={`header ${toggleStatus ? "active" : ""}`}>
        <div className="topbar d-flex align-items-center justify-content-between shadow-sm">
          <div className="d-flex align-items-center">
            <div
              className={toggleStatus ? "toggle active" : "toggle"}
              onClick={setToggleStatus}
            >
              <span>{toggleStatus ? <IoMenu /> : <CgMenuRightAlt />}</span>
            </div>
            <div className="search">
              <label>
                <input type="text" placeholder="Search" />
                <FiSearch />
              </label>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <div className="mail d-flex gap-3  px-3">
              <span className="fs-2">
                <IoMdMail />
              </span>
              <span className="fs-2 notification">
                <MdNotifications />
              </span>
            </div>
            <div className="notification fs-1"></div>
            <div className="user">
              <img
                src="https://i.pinimg.com/236x/d2/70/f5/d270f57ef778b98f5cc129225dcb17a1.jpg"
                alt="user-image"
              />
            </div>

            <p className="mb-0">Stany Madanu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
