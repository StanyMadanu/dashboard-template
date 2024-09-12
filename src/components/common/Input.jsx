import React from "react";
const Input = ({ name, label, autoFocus, error, ...rest }) => {
  return (
    <div className="mb-1">
      <input
        {...rest}
        id={name}
        name={name}
        autoFocus={autoFocus}
        autoComplete={false}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
