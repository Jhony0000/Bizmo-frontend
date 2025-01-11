import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function AuthLayout({ children, authentication = true }) {
  const [loder, setLoder] = useState(true);
  const authStutes = useSelector((state) => state.auth.status);
  const naviget = useNavigate();

  useEffect(() => {
    if (authentication && authStutes !== authentication) {
      naviget("/login");
    } else if (!authentication && authStutes !== authentication) {
      naviget("/");
    }
    setLoder(false);
  }, [naviget, authStutes, authentication]);
  return loder ? <h1>Loding...</h1> : <>{children}</>;
}

export default AuthLayout;
