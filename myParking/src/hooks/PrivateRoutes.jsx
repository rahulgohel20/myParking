import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Swal from "sweetalert2";

const useAuth = () => {
    const [authState, setAuthState] = useState({ isLoggedin: false, role: "" });
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const id = localStorage.getItem("id");
      const role = localStorage.getItem("role");
  
      if (id) {
        setAuthState({ isLoggedin: true, role });
      }
      else{
        Swal.fire({
          title: "Login Require?",
          text: "Please login first",
          icon: "info"
        });
      }
      setLoading(false);
    }, []);
  
    return { ...authState, loading };
  };
  
  const PrivateRoutes = () => {
    const auth = useAuth();
  
    if (auth.loading) {
      return <h1></h1>; // Prevents redirection before auth state is set
    }
  
    return auth.isLoggedin ? <Outlet /> : <Navigate to="/login" />;
  };

  export default PrivateRoutes;