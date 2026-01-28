import React, { useEffect, useState } from "react";
import { getUserById } from "../api/userApi";

function UserInfoCard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("userInfo"));
        if (!storedUser?._id) {
          setError("User not found");
          setLoading(false);
          return;
        }

        const response = await getUserById(storedUser._id);
        // Assuming backend wraps data in { success, message, data }
        setUser(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch user");
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p>{error}</p>;
  if (!user) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        marginBottom: "20px",
      }}
    >
      <h3 style={{ margin: "0 0 5px 0" }}>{user.name}</h3>
      <p style={{ margin: "2px 0" }}>
        <strong>Email:</strong> {user.email}
      </p>
      <p style={{ margin: "2px 0" }}>
        <strong>Number:</strong> {user.number || "N/A"}
      </p>
      <p style={{ margin: "2px 0" }}>
        <strong>Role:</strong> {user.role || "User"}
      </p>
    </div>
  );
}

export default UserInfoCard;
