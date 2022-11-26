import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

const RequireAuth = ({children}) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
   
  if (true) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;

}

export default RequireAuth;