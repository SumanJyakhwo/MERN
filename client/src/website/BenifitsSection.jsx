import avatar from '../assets/avatar.png';

function BenefitsSection() {
  return (
    <section className="bg-[#F9F5FF] py-[80px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-[40px] px-[24px]">
        
        <div className="grid grid-cols-2 gap-[20px]">
          <img src={avatar} />
          <img src={avatar} />
          <img src={avatar}/>
          <img src={avatar}/>
        </div>

        <div>
          <h2 className="text-[36px] font-[700] mb-[24px]">
            Benefits From Our Online Learning
          </h2>

          <ul className="space-y-[20px]">
            {[
              "Online Degrees",
              "Short Courses",
              "Training From Experts",
              "1.5k+ Video Courses",
            ].map((item) => (
              <li key={item} className="flex gap-[16px]">
                <div className="w-[40px] h-[40px] bg-[#9B5CF6] rounded-full" />
                <div>
                  <p className="font-[600]">{item}</p>
                  <p className="text-[14px] text-[#6B7280]">
                    Description text exactly as shown.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
export default BenefitsSection;