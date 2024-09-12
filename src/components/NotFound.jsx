import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h1>404 - Page Not Found</h1>
      <button
        className="btn btn-primary text-white"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
