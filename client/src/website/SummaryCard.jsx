function SummaryCard({ title, amount }) {
  return (
    <div className="bg-white rounded-[16px] p-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <p className="text-[14px] text-[#6B7280]">{title}</p>
      <p className="text-[28px] font-[700] mt-[8px]">{amount}</p>
    </div>
  );
}

export default SummaryCard 