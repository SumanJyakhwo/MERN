import { useState, useEffect } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [showUsersTable, setShowUsersTable] = useState(false);
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [internalForm, setInternalForm] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    role: "user",
  });
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  // Fetch users (only if authenticated)
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await res.json();
      if (res.ok) setUsers(result.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  // Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),
      });
      const result = await res.json();
      if (res.ok && result.token) {
        localStorage.setItem("token", result.token);
        setToken(result.token);
        setIsLoggedIn(true);
        setLoginForm({ email: "", password: "" });
      } else {
        alert(result.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Login error");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setIsLoggedIn(false);
    setUsers([]);
    setShowUsersTable(false);
    setShowAddUserForm(false);
  };

  // Add internal user
  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(internalForm),
      });
      const result = await res.json();
      if (res.ok) {
        setUsers([...users, result]);
        setInternalForm({ name: "", email: "", password: "", number: "", role: "user" });
        alert("User added successfully");
      } else {
        alert(result.message || "Failed to add user");
      }
    } catch (err) {
      console.error(err);
      alert("Error adding user");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginForm.email}
            onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
            className="w-full border p-2 rounded-xl"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
            className="w-full border p-2 rounded-xl"
            required
          />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-2xl">
            Login
          </button>
        </form>
      </div>
    );
  }

  // Authenticated view
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex gap-4 mb-6">
        <button
          className="px-4 py-2 bg-black text-white rounded-2xl"
          onClick={() => {
            fetchUsers();
            setShowUsersTable(true);
            setShowAddUserForm(false);
          }}
        >
          Users
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-2xl"
          onClick={() => {
            setShowAddUserForm(true);
            setShowUsersTable(false);
          }}
        >
          Add User
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-2xl"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Users Table */}
      {showUsersTable && (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td className="border p-2">{u.name}</td>
                <td className="border p-2">{u.email}</td>
                <td className="border p-2">{u.role || "user"}</td>
                <td className="border p-2">{u.number || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Add User Form */}
      {showAddUserForm && (
        <form onSubmit={handleAddUser} className="space-y-3 max-w-md">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={internalForm.name}
            onChange={(e) => setInternalForm({ ...internalForm, name: e.target.value })}
            className="w-full border p-2 rounded-xl"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={internalForm.email}
            onChange={(e) => setInternalForm({ ...internalForm, email: e.target.value })}
            className="w-full border p-2 rounded-xl"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={internalForm.password}
            onChange={(e) => setInternalForm({ ...internalForm, password: e.target.value })}
            className="w-full border p-2 rounded-xl"
            required
          />
          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            value={internalForm.number}
            onChange={(e) => setInternalForm({ ...internalForm, number: e.target.value })}
            className="w-full border p-2 rounded-xl"
          />
          <select
            name="role"
            value={internalForm.role}
            onChange={(e) => setInternalForm({ ...internalForm, role: e.target.value })}
            className="w-full border p-2 rounded-xl"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-2xl">
            Add User
          </button>
        </form>
      )}
    </div>
  );
}
