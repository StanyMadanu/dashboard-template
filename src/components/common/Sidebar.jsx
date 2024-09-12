import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdLogout,
  MdOutlineForum,
  MdSettings,
  MdAssessment,
  MdSpaceDashboard,
} from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { FaCalendarDays } from "react-icons/fa6";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { TbBrandFiverr } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";

const Sidebar = ({ setToggleStatus, toggleStatus }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const sidebar = useRef();

  useEffect(() => {
    const currentPath = location.pathname;
    const mediaQuery = window.matchMedia("(max-width: 991.9px)");

    const index = links.findIndex((link) => link.to === currentPath);
    setActiveIndex(index === -1 ? 0 : index);

    if (mediaQuery.matches) {
      setToggleStatus();
    }
  }, [location.pathname]);

  const handleLink = (index) => {
    setActiveIndex(index);
  };

  const links = [
    { to: "/dashboard", icon: <MdSpaceDashboard />, title: "Dashboard" },
    { to: "/lessons", icon: <BsFillFileEarmarkTextFill />, title: "Lessons" },
    { to: "/schedule", icon: <FaCalendarDays />, title: "Schedule" },
    { to: "/materials", icon: <ImBooks />, title: "Materials" },
    { to: "/forum", icon: <MdOutlineForum />, title: "Forum" },
    { to: "/assessments", icon: <MdAssessment />, title: "Assessments" },
    { to: "/settings", icon: <MdSettings />, title: "Settings" },
    // { to: "#!", icon: <MdLogout />, title: "Logout" },
  ];

  return (
    <section className="">
      <div
        className={`d-flex navigation ${toggleStatus ? " active" : ""}`}
        ref={sidebar}
      >
        <span
          className="cross-mark d-block d-lg-none ms-5 tx-white fs-21 fw-bold"
          onClick={setToggleStatus}
        >
          <MdOutlineClose />
        </span>
        <ul className="icons-sidebar">
          {links.map((link, index) => (
            <li
              key={index}
              className={`link-icon my-2 ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleLink(index)}
            >
              <Link to={link.to}>
                <span className="icon">{link.icon}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="w-100">
          <div className="logo-brand d-flex justify-content-center align-items-center">
            <Link to="#!" className="tx-white fw-bold">
              <span className="icon">
                <TbBrandFiverr />
              </span>
              <span className="title">Logo</span>
            </Link>
          </div>
          <ul className="sidebar-label-ul d-flex flex-column">
            {links.map((link, index) => (
              <li
                key={index}
                className={
                  activeIndex === index
                    ? "sidebar-link my-2 active"
                    : "sidebar-link my-2"
                }
                onClick={() => handleLink(index)}
              >
                <Link to={link.to}>
                  <span className="title">{link.title}</span>
                </Link>
              </li>
            ))}

            <li
              className="logout mt-auto ms-5"
              style={{ listStyleType: "none" }}
            >
              <Link to="#!" className="d-flex ms-4 align-items-center gap-2">
                <span className="icon">
                  <MdLogout />
                </span>
                <span className="title">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
