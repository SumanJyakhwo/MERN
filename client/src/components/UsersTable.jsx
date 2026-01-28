import React, { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();

        // Access the actual users array inside response.data.data
        setUsers(response.data.data);

        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <table border="1" cellPadding="8" style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.number || "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
