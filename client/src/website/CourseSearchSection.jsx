function CourseSearchSection() {
  return (
    <section className="bg-white py-[60px]">
      <div className="max-w-[800px] mx-auto px-[24px] flex flex-col items-center gap-[24px]">
        {/* Title */}
        <h1 className="text-[48px] leading-[60px] font-[700] text-center">
          Search Courses
        </h1>

        {/* Search input + button */}
        <div className="w-full flex gap-[16px]">
          <input
            className="flex-1 border border-[#E5E7EB] rounded-[12px] px-[20px] py-[14px]"
            placeholder="Search for over 50+ courses"
          />
          <button className="px-[28px] bg-[#9B5CF6] text-white rounded-[12px] font-[600]">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default CourseSearchSection;
