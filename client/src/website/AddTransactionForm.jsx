function AddTransactionForm() {
  return (
    <div className="bg-white rounded-[16px] p-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <h3 className="text-[18px] font-[700] mb-[20px]">
        Add Transaction
      </h3>

      <div className="grid grid-cols-2 gap-[16px] mb-[16px]">
        <select className="px-[14px] py-[12px] border border-[#E5E7EB] rounded-[10px]">
          <option>Income</option>
          <option>Expense</option>
        </select>

        <input
          type="date"
          className="px-[14px] py-[12px] border border-[#E5E7EB] rounded-[10px]"
        />
      </div>

      <div className="grid grid-cols-2 gap-[16px] mb-[16px]">
        <input
          placeholder="Category"
          className="px-[14px] py-[12px] border border-[#E5E7EB] rounded-[10px]"
        />
        <input
          placeholder="Amount"
          type="number"
          className="px-[14px] py-[12px] border border-[#E5E7EB] rounded-[10px]"
        />
      </div>

      <textarea
        placeholder="Description (optional)"
        className="w-full px-[14px] py-[12px] border border-[#E5E7EB] rounded-[10px] mb-[20px]"
      />

      <button className="w-full py-[12px] bg-[#9B5CF6] text-white rounded-[12px] font-[600]">
        Save Transaction
      </button>
    </div>
  );
}


export default AddTransactionForm;