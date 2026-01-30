function DataTable({ title }) {
  return (
    <div className="bg-white rounded-[16px] p-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <h3 className="text-[18px] font-[700] mb-[16px] ">{title}</h3>

      <table className="w-full text-[14px]">
        <thead className="text-[#6B7280]">
          <tr>
            <th className="text-left pb-[8px]">Date</th>
            <th className="text-left pb-[8px]">Category</th>
            <th className="text-right pb-[8px]">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="py-[10px]">2024-03-01</td>
            <td>Sales</td>
            <td className="text-right">$1,200</td>
          </tr>
          <tr className="border-t">
            <td className="py-[10px]">2024-03-02</td>
            <td>Marketing</td>
            <td className="text-right">$450</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;