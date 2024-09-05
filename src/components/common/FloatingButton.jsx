import React, { useEffect, useState } from "react";

const FloatingButton = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (body) {
      if (isActive) {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
    }

    // Cleanup function to ensure 'dark' class is removed
    return () => {
      if (body) {
        body.classList.remove("dark");
      }
    };
  }, [isActive]);

  const handleToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div>
      <button
        className={`floating-toggle ${isActive ? "active" : ""}`}
        onClick={handleToggle}
      >
        {/* {isActive ? "Light" : "Dark"} */}
      </button>
    </div>
  );
};

export default FloatingButton;
