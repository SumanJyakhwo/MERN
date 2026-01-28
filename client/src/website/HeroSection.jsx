import avatar from "../assets/avatar.png";
import a from "../assets/a.png";
import neema from "../assets/neea.png";
import dnb from "../assets/dnb.png";
import stempedia from "../assets/stempedia-logo.png";
import google from "../assets/google_for_education_logo-svg.png";
import childsafe from "../assets/childsaftenet.png";


function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-[60px] py-[80px] grid grid-cols-2 gap-[40px] items-center">
        {/* Left */}
        <div>
          <h1 className="text-[48px] leading-[60px] font-[700] mb-[24px]">
            Develop skills that matters. Become Futureproof.
          </h1>

          <p className="text-[16px] text-[#6B7280] mb-[32px] max-w-[460px]">
            Exploring the fundamentals of new learning paths with experienced
            mentors and professional instructors.
          </p>

          <div className="flex items-center gap-[24px]">
            <button className="px-[28px] py-[14px] bg-gradient-to-r from-[#B56CFF] to-[#E889E8] text-white rounded-[14px] font-[600]">
              Enroll Now
            </button>

            <button className="px-[28px] py-[14px] text-black rounded-[14px] font-[600] border border-gray-300 relative group hover:border-transparent">
              <span className="absolute inset-0 bg-gradient-to-r from-[#B56CFF] to-[#E889E8] rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center gap-[8px] font-[500]">
                <span>▶</span>
                <span>Watch Strategy</span>
              </span>
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative w-[420px] h-[420px] mx-[80px] mt-[80px]">
          {/* Decorative circles */}
          <div className="absolute top-[-10px] left-[-30px] w-[420px] h-[420px] rounded-full border-[4px] border-dashed border-[#E889E8]" />
          <div className="absolute top-[10px] left-[-10px] w-[380px] h-[380px] rounded-full bg-gradient-to-r from-[#B56CFF] to-[#E889E8]" />

          {/* Main image */}
          <img src={a} alt="" className="relative z-10" />

          {/* Floating Card 1 */}
          <div
            className="absolute top-[40px] left-[-40px] z-20 bg-white/30 backdrop-blur-md border border-white/40 shadow-xl px-[16px] py-[10px] rounded-[14px] flex items-center gap-[10px] animate-float-a"
            style={{ animationDelay: "0s" }}
          >
            <div className="w-[32px] h-[32px] rounded-full bg-[#E889E8] text-white flex items-center justify-center text-sm font-bold">
              ▶
            </div>
            <div>
              <p className="text-[14px] font-[600]">50+</p>
              <p className="text-[12px] text-gray-500">Online Courses</p>
            </div>
          </div>

          {/* Floating Card 2 */}
          <div
            className="absolute top-[80px] right-[-30px] z-20 px-[16px] py-[12px] rounded-[14px]bg-white/30 backdrop-blur-md border border-white/40 shadow-xl animate-float-b"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-[14px] font-[600]">10k+</p>
            <p className="text-[12px] text-gray-500 mb-[6px]">
              Online Students
            </p>
            <div className="flex -space-x-2">
              <img
                src={avatar}
                className="w-[24px] h-[24px] rounded-full border-2 border-white"
                alt=""
              />
              <img
                src={avatar}
                className="w-[24px] h-[24px] rounded-full border-2 border-white"
                alt=""
              />
              <img
                src={avatar}
                className="w-[24px] h-[24px] rounded-full border-2 border-white"
                alt=""
              />
            </div>
          </div>

          {/* Floating Card 3 */}
          <div
            className="absolute bottom-[30px] left-[-20px] z-20
    bg-white/30 backdrop-blur-lg border border-white/30
    px-[16px] py-[16px] rounded-[16px] shadow-xl w-[220px]
    animate-float-c"
          >
            <div className="flex items-center gap-[12px]">
              {/* Avatar on the left */}
              <img
                src={avatar}
                alt="Instructor"
                className="w-[40px] h-[40px] rounded-full object-cover border border-white/50"
              />

              {/* Right side: text stacked with button below */}
              <div className="flex flex-col justify-center flex-1">
                <div>
                  <p className="text-[14px] font-[600] leading-tight">
                    UI UX Design Class
                  </p>
                  <p className="text-[12px] text-gray-600">
                    Today · 12:00 PM
                  </p>
                </div>

                {/* Button below the text */}
                <button
                  className="mt-[8px] py-[6px] rounded-[12px] text-[13px] font-[600] text-white
          bg-gradient-to-r from-[#B56CFF] to-[#E889E8]
          hover:opacity-90 transition-opacity w-full"
                >
                  Join Class
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Partner Logos */}
      <div className="bg-gradient-to-r from-[#B56CFF] to-[#E889E8] py-[24px]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center px-[24px] gap-10">
          {[dnb, neema, childsafe, stempedia, google].map((src, index) => (
            <div key={index} className="flex-1 flex justify-center">
              <img
                src={src}
                alt=""
                className="max-h-[60px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default HeroSection;
