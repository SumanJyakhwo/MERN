import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // SIMPLE AUTH (demo)
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/admin");
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="min-h-[600px] bg-[#F9F5FF] flex items-center justify-center font-inter">
      <div className="w-[520px] bg-white rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#B56CFF] to-[#E889E8] px-[32px] py-[24px] text-center">
          <h2 className="text-[24px] font-[700] text-white">
            Welcome Back
          </h2>
          <p className="text-[14px] text-white/90">
            Login to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-[32px] py-[32px]">
          <div className="space-y-[16px]">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-[16px] py-[12px] border border-[#E5E7EB] rounded-[10px]"
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full px-[16px] py-[12px] border border-[#E5E7EB] rounded-[10px]"
            />
          </div>

          {error && (
            <p className="text-[14px] text-red-500 mt-[12px]">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full mt-[24px] py-[12px] bg-[#9B5CF6] text-white rounded-[12px] font-[600]"
          >
            Login
          </button>

          <p className="text-[14px] text-center text-[#6B7280] mt-[16px]">
            Don’t have an account?{" "}
            <span className="text-[#9B5CF6] font-[500] cursor-pointer">
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
