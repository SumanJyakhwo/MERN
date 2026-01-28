import React, { useState } from "react";
import { registerUser } from "../api/userApi"; // import the API helper

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the centralized API function
      await registerUser({ name, email, password, number });

      setMessage("Registration successful! You can now login.");

      // Optionally, reset form fields
      setName("");
      setEmail("");
      setPassword("");
      setNumber("");
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Registration failed. Try again."
      );
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Number:</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RegisterForm;
