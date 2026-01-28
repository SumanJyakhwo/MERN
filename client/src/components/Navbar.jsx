import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#010B13",
        color: "white",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>Skillsup</div>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <span>Welcome, {user?.name || "User"}</span>
        <button
          onClick={handleLogout}
          style={{
            padding: "5px 12px",
            backgroundColor: "#FFCC00",
            border: "none",
            color: "white",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
