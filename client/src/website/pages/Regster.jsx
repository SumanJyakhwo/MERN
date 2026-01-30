function Register() {
  return (
    <div className="min-h-[800px] bg-[#F9F5FF] flex items-center justify-center font-inter">
      <div className="w-[520px] bg-white rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] overflow-hidden">
        
        <div className="bg-gradient-to-r from-[#B56CFF] to-[#E889E8] px-[32px] py-[24px] text-center">
          <h2 className="text-[24px] font-[700] text-white">
            Create Account
          </h2>
          <p className="text-[14px] text-white/90">
            Register to get started
          </p>
        </div>

        <div className="px-[32px] py-[32px]">
          <div className="space-y-[16px]">
            <input
              placeholder="Full Name"
              className="w-full px-[16px] py-[12px] border border-[#E5E7EB] rounded-[10px]"
            />

            <input
              placeholder="Email"
              className="w-full px-[16px] py-[12px] border border-[#E5E7EB] rounded-[10px]"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-[16px] py-[12px] border border-[#E5E7EB] rounded-[10px]"
            />

            <input
              type="number"
              placeholder="Number"
              className="w-full px-[16px] py-[12px] border border-[#E5E7EB] rounded-[10px]"
            />
          </div>

          <button className="w-full mt-[24px] py-[12px] bg-[#9B5CF6] text-white rounded-[12px] font-[600]">
            Register
          </button>

          <p className="text-[14px] text-center text-[#6B7280] mt-[16px]">
            Already have an account? <span className="text-[#9B5CF6] font-[500]">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;