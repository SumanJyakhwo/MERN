import CourseCard from "../cards/CourseCard";
import PageHeader from "../components/common/PageHeader";


function CoursesPage() {
  return (
    <div className="bg-[#F9F5FF] font-inter">
      <PageHeader
        title="All Courses"
        subtitle="Explore our complete range of professional courses"
      />

      <section className="max-w-[1200px] mx-auto px-[24px] py-[60px]">
        <div className="flex gap-[16px] mb-[40px]">
          <select className="px-[16px] py-[12px] rounded-[10px] border border-[#E5E7EB]">
            <option>All Categories</option>
          </select>

          <select className="px-[16px] py-[12px] rounded-[10px] border border-[#E5E7EB]">
            <option>Newest</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-[24px]">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </section>
    </div>
  );
}

export default CoursesPage;