import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, adminOnly = false, ownerOrAdmin = false, userId }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  // Admin check only if user.isAdmin exists
  if (adminOnly && user.isAdmin === false) return <Navigate to="/" />;

  // Owner check only if user._id exists
  if (ownerOrAdmin && !(user.isAdmin || user._id === userId)) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
