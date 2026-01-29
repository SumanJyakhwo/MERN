import DashboardContent from "./DashboardContent";
import Sidebar from "./Sidebar";

function AdminDashboard() {
  return (
    <div className="min-h-[600px] bg-[#F9F5FF] font-inter flex">
      <Sidebar />
      <DashboardContent />
    </div>
  );
}

export default AdminDashboard;
