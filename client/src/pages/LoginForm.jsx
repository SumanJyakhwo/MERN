import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import { loginUser } from "../api/userApi"; // adjust path if needed

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // hook for redirect

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({ email, password });

      // Access the actual user data inside response.data.data
      const userData = response.data.data;

      // Save user info (including token) in localStorage
      localStorage.setItem("userInfo", JSON.stringify(userData));

      // Redirect to Dashboard after login
      navigate("/dashboard");
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
      {message && <p style={{ marginTop: "15px", color: "red" }}>{message}</p>}
    </div>
  );
}

export default LoginForm;
