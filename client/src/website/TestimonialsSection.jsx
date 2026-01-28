import avatar from '../assets/avatar.png';

function TestimonialsSection() {
  return (
    <section className="bg-white py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[24px]">
        <h2 className="text-[36px] font-[700] text-center mb-[12px]">
          Student’s Testimonials
        </h2>
        <p className="text-[16px] text-[#6B7280] text-center mb-[48px]">
          Hear what our students say about their learning experience.
        </p>

        <div className="grid grid-cols-3 gap-[24px]">
          {["Alex Rodriguez", "Emily Chen", "James Johnson"].map((name) => (
            <div
              key={name}
              className="bg-[#F9F5FF] rounded-[20px] p-[24px]"
            >
              <div className="flex items-center gap-[12px] mb-[16px]">
                <img
                  src={avatar}
                  className="w-[44px] h-[44px] rounded-full"
                />
                <div>
                  <p className="font-[600]">{name}</p>
                  <p className="text-[14px] text-[#6B7280]">Student</p>
                </div>
              </div>

              <p className="text-[14px] text-[#6B7280] leading-[22px]">
                Enrolling in courses on this platform was a transformative
                experience. The content and instructors exceeded expectations.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default TestimonialsSection;