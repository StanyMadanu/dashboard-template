import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";
import FloatingButton from "./components/common/FloatingButton";
// import customCursor from "./assets/images/curso2.png";

const Layout = () => {
  const [toggleStatus, setToggleStatus] = useState(false);

  const handleToggle = () => {
    setToggleStatus((prevStatus) => !prevStatus);
  };

  return (
    <section className="main-container">
      <Header toggleStatus={toggleStatus} setToggleStatus={handleToggle} />

      <Sidebar toggleStatus={toggleStatus} setToggleStatus={handleToggle} />

      <div
        className={toggleStatus ? "main-body px-4 active" : "main-body px-4"}
      >
        <Outlet />
        <FloatingButton />
      </div>
    </section>
  );
};

export default Layout;
