function CourseCard() {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      
      {/* Thumbnail */}
      <div className="h-[180px] bg-[#EDE9FE]" />

      {/* Content */}
      <div className="p-[20px]">
        <span className="inline-block text-[12px] font-[500] text-[#9B5CF6] mb-[8px]">
          Design
        </span>

        <h3 className="text-[16px] font-[700] mb-[8px]">
          UI/UX Design Masterclass
        </h3>

        <p className="text-[14px] text-[#6B7280] mb-[16px]">
          Learn modern UI/UX design from scratch with real projects.
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <div className="w-[32px] h-[32px] rounded-full bg-[#DDD6FE]" />
            <span className="text-[14px] text-[#6B7280]">
              Alex Morgan
            </span>
          </div>

          <span className="text-[16px] font-[700] text-[#9B5CF6]">
            $49
          </span>
        </div>
      </div>
    </div>
  );
}


export default CourseCard;