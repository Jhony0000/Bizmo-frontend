import React from "react";

function Button({ children, className = "btn", ...props }) {
  return (
    <div>
      <button className={`${className}`} {...props}>
        {children}
      </button>
    </div>
  );
}

export default Button;
