import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, deleteUser } from "../api/userApi";
import { useAuth } from "../context/AuthContext";

const UserListPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await getUsers(user.token);
      setUsers(Array.isArray(response.data.data) ? response.data.data : []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch users");
    }
  };

  useEffect(() => {
    if (user?.token) fetchUsers();
  }, [user]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await deleteUser(id, user.token);
      fetchUsers(); // refresh list
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete user");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users List</h2>
      <button onClick={() => navigate("/users/create")}>Create User</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {users.length > 0 ? (
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Hashed Password</th>
              <th>Is Admin</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td>{u._id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.age ?? "-"}</td>
                <td>{u.password ?? "-"}</td>
                <td>{u.isAdmin ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => navigate(`/users/edit/${u._id}`)}>Edit</button>
                  <button onClick={() => handleDelete(u._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserListPage;
