import avatar from '../assets/avatar.png';

function InstructorCTASection() {
  return (
    <section className="bg-[#F9F5FF] py-[80px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-[40px] px-[24px] items-center">
        
        <div>
          <h2 className="text-[36px] font-[700] mb-[16px]">
            If You Are A Certified Teacher
            <br />
            Then Become An Instructor
          </h2>

          <p className="text-[16px] text-[#6B7280] mb-[32px] max-w-[520px]">
            Unlock the opportunity to make an impact by sharing
            your knowledge with learners worldwide.
          </p>

          <ul className="grid grid-cols-2 gap-[16px] mb-[32px] text-[14px]">
            <li>✔ Global Impact</li>
            <li>✔ Flexible Schedule</li>
            <li>✔ Creative Freedom</li>
            <li>✔ Professional Growth</li>
            <li>✔ Recognition</li>
            <li>✔ Networking</li>
          </ul>

          <button className="px-[28px] py-[14px] bg-[#9B5CF6] text-white rounded-[14px] font-[600]">
            Become an Instructor
          </button>
        </div>

        <div className="flex justify-center">
          <img src={avatar}/>
        </div>

      </div>
    </section>
  );
}


export default InstructorCTASection;