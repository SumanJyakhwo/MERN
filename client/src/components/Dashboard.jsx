import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersTable from "./UsersTable";
import Navbar from "./Navbar";
import UserInfoCard from "./UserInfoCard";

function Dashboard() {
  const [showUsers, setShowUsers] = useState(false);

  return (
    <>
    <div><Navbar/></div>
    
    <div style={{ maxWidth: "800px", margin: "50px auto" }}>
      <UserInfoCard/>

      <button
        onClick={() => setShowUsers(!showUsers)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {showUsers ? "Hide Users" : "Show Users"}
      </button>

      {showUsers && <UsersTable />}
    </div>
    </>
  );
}

export default Dashboard;
