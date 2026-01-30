import DashboardContent from "../../dashboard/DashboardContent";
import Sidebar from "../../dashboard/Sidebar";


function AdminDashboard() {
  return (
    <div className="min-h-[600px] font-inter flex">
      <Sidebar />
      <DashboardContent />
    </div>
  );
}

export default AdminDashboard;
