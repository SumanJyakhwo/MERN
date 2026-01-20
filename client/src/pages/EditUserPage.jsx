import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../api/userApi";
import { useAuth } from "../context/AuthContext";

const EditUserPage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", age: "", isAdmin: false });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserById(id, user.token);
        setForm(res.data.data); // adjust according to backend response
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch user");
      }
    };
    fetchUser();
  }, [id, user.token]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, form, user.token);
      navigate("/users");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update user");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit User</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <br />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <br />
        <input name="age" type="number" placeholder="Age" value={form.age ?? ""} onChange={handleChange} />
        <br />
        <label>
          <input type="checkbox" name="isAdmin" checked={form.isAdmin} onChange={handleChange} /> Is Admin
        </label>
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUserPage;
