import AddTransactionForm from "./AddTransactionForm";
import DataTable from "./DataTable";
import FinanceChart from "./FinanceChart";
import SummaryCard from "./SummaryCard";


function DashboardContent() {
  return (
    <main className="flex-1 p-[32px] bg-[#F9F5FF]">
      
      <div className="grid grid-cols-3 gap-[24px] mb-[40px]">
        <SummaryCard title="Total Income" amount="$12,400" />
        <SummaryCard title="Total Expenses" amount="$7,850" />
        <SummaryCard title="Balance" amount="$4,550" />
      </div>

      <div className="grid grid-cols-3 gap-[24px] mb-[40px]">
        <div className="col-span-2">
          <FinanceChart />
        </div>
        <AddTransactionForm />
      </div>

      <div className="grid grid-cols-2 gap-[24px]">
        <DataTable title="Income" />
        <DataTable title="Expenses" />
      </div>

    </main>
  );
}


export default DashboardContent