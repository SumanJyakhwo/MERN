import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/userApi";
import { useAuth } from "../context/AuthContext";

const CreateUserPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    isAdmin: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user?.token) throw new Error("You must be logged in as admin");

      // Convert age to number if provided
      const payload = {
        ...form,
        age: form.age ? Number(form.age) : undefined,
      };

      await createUser(payload, user.token); // send token
      navigate("/users"); // redirect to user list
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || err.message || "Failed to create user");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create User</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isAdmin"
            checked={form.isAdmin}
            onChange={handleChange}
          />{" "}
          Is Admin
        </label>
        <br />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUserPage;
