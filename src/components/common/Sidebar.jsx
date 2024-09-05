import React, { useEffect, useState } from "react";
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

const Sidebar = ({ setToggleStatus, toggleStatus }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const index = links.findIndex((link) => link.to === currentPath);
    setActiveIndex(index === -1 ? 0 : index);
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
      <div className={toggleStatus ? "navigation active" : "navigation"}>
        <div className="logo-brand d-flex justify-content-center align-items-center">
          <Link to="#!" className="tx-white">
            <span className="icon">
              <TbBrandFiverr />
            </span>
            <span className="title">Brand Name</span>
          </Link>
        </div>
        <ul>
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
                <span className="icon">{link.icon}</span>
                <span className="title">{link.title}</span>
              </Link>
            </li>
          ))}

          <li className="logout mt-6">
            <Link to="#!">
              <span className="icon">
                <MdLogout />
              </span>
              <span className="title">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;