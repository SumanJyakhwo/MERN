import { useNavigate } from "react-router-dom";

function Sidebar() {

   const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isAuthenticated");
    navigate("/login", { replace: true });
  }
  
  return (
    <aside className="w-[260px] bg-F9F5FF p-[24px] bg-[#F9F5FF] ">
      <h2 className="text-[22px] font-[700] mb-[32px]">Etech Admin</h2>

      <ul className="space-y-[16px] text-[16px]">
        <li className="font-[600] text-[#9B5CF6]">Dashboard</li>
        <li>Income</li>
        <li>Expenses</li>
        <li>Reports</li>
        <button
          onClick={handleLogout}
          className="w-full py-[12px] rounded-[12px] font-[600] bg-[#9B5CF6] text-white"
        >
          Logout
        </button>
      </ul>
    </aside>
  );
}

export default Sidebar