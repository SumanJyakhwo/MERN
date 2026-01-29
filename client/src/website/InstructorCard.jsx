function InstructorCard() {
  return (
    <div className="bg-white rounded-[20px] p-[24px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <img
        src="/assets/instructor.png"
        className="w-[96px] h-[96px] rounded-full mx-auto mb-[16px]"
      />

      <h3 className="font-[700] text-[16px]">Alex Morgan</h3>
      <p className="text-[14px] text-[#6B7280] mb-[12px]">
        UI/UX Expert
      </p>

      <p className="text-[14px] text-[#6B7280]">
        8+ years of professional teaching experience
      </p>
    </div>
  );
}


export default InstructorCard;