import { Navigate, useParams } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { username } = useParams();
  
  // Retrieve and parse stored auth data
  const storedUser = JSON.parse(localStorage.getItem("isLoggedin"));

  // Validate authentication and username match
  if (!storedUser || !storedUser.auth || (username && storedUser.name !== username)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
