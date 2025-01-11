import React from "react";

function Input({ placeHolder, className = "", type, ...props }) {
  return (
    <div>
      <input
        className={`${className}`}
        type={`${type}`}
        placeholder={`${placeHolder}`}
        {...props}
      />
    </div>
  );
}

export default Input;
