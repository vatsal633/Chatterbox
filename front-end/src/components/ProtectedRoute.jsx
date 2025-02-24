import { Navigate, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
const ProtectedRoute = () => {
  const authToken = localStorage.getItem("authToken");
  const isAuthenticated = authToken && JSON.parse(authToken)?.username;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
