import React from "react";

function Button({ children, className = "btn", ...props }) {
  return (
    <div>
      <Button className={`${className}`} {...props}>
        {children}
      </Button>
    </div>
  );
}

export default Button;
