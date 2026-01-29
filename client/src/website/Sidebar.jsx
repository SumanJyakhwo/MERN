function Sidebar() {
  return (
    <aside className="w-[260px] bg-white p-[24px] ">
      <h2 className="text-[22px] font-[700] mb-[32px]">Etech Admin</h2>

      <ul className="space-y-[16px] text-[16px]">
        <li className="font-[600] text-[#9B5CF6]">Dashboard</li>
        <li>Income</li>
        <li>Expenses</li>
        <li>Reports</li>
        <li>Logout</li>
      </ul>
    </aside>
  );
}

export default Sidebar