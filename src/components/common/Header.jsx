import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdNotifications } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Header = ({ setToggleStatus, toggleStatus }) => {
  const profile = ["profile", "logout"];

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
            <div className="search d-none d-sm-block">
              <label htmlFor="search">
                <FiSearch />
              </label>
              <input id="search" type="text" placeholder="Search" />
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <div className="mail d-flex gap-3 px-3 d-none d-sm-block">
              <span className="fs-4 me-3">
                <IoMdMail />
              </span>
              <span className="fs-4 notification">
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

            <div className="d-flex align-items-center gap-2">
              <p className="mb-0">Stany Madanu</p>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle p-2 header-dropdown-btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <ul className="dropdown-menu px-2 py-3">
                  <div className="d-flex align-items-center gap-2">
                    <CgProfile />
                    <li>
                      <Link to="#!" className="dropdown-item fs-14 p-0">
                        Profile
                      </Link>
                    </li>
                  </div>

                  <div className="d-flex align-items-center py-2 gap-2">
                    <MdLogout />
                    <li>
                      <Link to="#!" className="dropdown-item fs-14 p-0">
                        Logout
                      </Link>
                    </li>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <IoMdSettings />
                    <li>
                      <Link to="#!" className="dropdown-item fs-14 p-0">
                        Settings
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
