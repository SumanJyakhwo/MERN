import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/register">Register</Link> |{" "}
      {user && <Link to="/users">Users</Link>}{" "}
      | {user ? <button onClick={handleLogout}>Logout</button> : <Link to="/login">Login</Link>}
    
    </nav>
  );
};

export default Navbar;
