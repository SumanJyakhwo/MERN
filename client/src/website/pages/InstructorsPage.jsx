import InstructorCard from "../cards/InstructorCard";
import PageHeader from "../components/common/PageHeader";


function InstructorsPage() {
  return (
    <div className="bg-[#F9F5FF] font-inter">
      <PageHeader
        title="Our Instructors"
        subtitle="Learn from industry-leading professionals"
      />

      <section className="max-w-[1200px] mx-auto px-[24px] py-[60px]">
        <div className="grid grid-cols-4 gap-[24px]">
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
        </div>
      </section>
    </div>
  );
}

export default InstructorsPage;