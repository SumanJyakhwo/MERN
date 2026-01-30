function FinanceChart() {
  return (
    <div className="bg-white rounded-[16px] p-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <h3 className="text-[18px] font-[700] mb-[24px]">
        Income vs Expense
      </h3>

      <div className="flex items-end gap-[32px] h-[200px]">
        
        <div className="flex flex-col items-center gap-[8px]">
          <div className="w-[40px] h-[140px] bg-[#9B5CF6] rounded-[8px]" />
          <span className="text-[14px]">Income</span>
        </div>

        <div className="flex flex-col items-center gap-[8px]">
          <div className="w-[40px] h-[90px] bg-[#E889E8] rounded-[8px]" />
          <span className="text-[14px]">Expense</span>
        </div>

      </div>
    </div>
  );
}

export default FinanceChart;