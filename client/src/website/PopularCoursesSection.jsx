import avatar from '../assets/avatar.png';
import robotics from '../assets/robotics.jpg';
import coding from '../assets/coding.jpg';

function PopularCoursesSection() {
  return (
    <section className="bg-white py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[24px]">
        <h2 className="text-[36px] font-[700] mb-[12px]">
          Our Popular Courses
        </h2>
        <p className="text-[16px] text-[#6B7280] mb-[40px] max-w-[520px]">
          Discover our most sought-after courses, carefully curated to meet
          the demands of today’s competitive landscape.
        </p>

        <div className="grid grid-cols-3 gap-[24px]">
          {[
            {
              title: "Robotics and IoT",
              price: "$560.00",
              instructor: "Suman",
              image: {robotics},
            },
            {
              title: "Python Programming",
              price: "$180.00",
              instructor: "Ujjwol",
              image: {coding},
            },
            {
              title: "Python For Data Science",
              price: "$432.00",
              instructor: "Alex Taylor",
              image:{avatar},
            },
          ].map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              <img src={avatar} className="w-full" />

              <div className="p-[20px]">
                <span className="inline-block text-[12px] font-[600] text-[#9B5CF6] mb-[8px]">
                  Design
                </span>

                <h3 className="text-[18px] font-[700] mb-[12px]">
                  {course.title}
                </h3>

                <div className="flex justify-between text-[14px] text-[#6B7280] mb-[16px]">
                  <span>12 Lessons</span>
                  <span>6h 30m</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[20px] font-[700]">
                    {course.price}
                  </span>

                  <div className="flex items-center gap-[8px]">
                    <img
                      src="/assets/avatar.png"
                      className="w-[28px] h-[28px] rounded-full"
                    />
                    <span className="text-[14px] font-[500]">
                      {course.instructor}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCoursesSection;