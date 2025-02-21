import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AuthLayout = ({ authentication = true, children }) => {
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Auth status:", authStatus); // Debugging line

    if (authStatus === undefined) {
      return; // Prevents unnecessary redirections before state is ready
    }

    if (authentication && !authStatus) {
      navigate("/login", { replace: true });
    } else if (!authentication && authStatus) {
      navigate("/", { replace: true });
    }

    setLoading(false); // ✅ Ensure loading is set to false after the check
  }, [navigate, authStatus, authentication]);

  return loading ? <h1>Loading...</h1> : <>{children}</>;
};

export default AuthLayout;
