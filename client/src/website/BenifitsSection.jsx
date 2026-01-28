import avatar from '../assets/a.png';

function BenefitsSection() {
  return (
    <section className="bg-[#F9F5FF] py-[80px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-[40px] px-[24px]">
        
        <div className="relative w-full aspect-square max-w-[500px]">
          {/* Background rounded rectangle with dashed border */}
          <div className="absolute inset-0 border-[4px] border-dashed border-[#E889E8] rounded-[100px]" />
                    

          
          {/* Grid container for avatars - no gap between them */}
          <div className="absolute inset-[20px] grid grid-cols-2">
            {/* Top-left avatar - rounded on top-left AND bottom-right */}
            <div className="relative overflow-hidden bg-gradient-to-br from-pink-300 to-pink-400" 
                 style={{ borderRadius: '90px 0 100px 0' }}>
              <img src={avatar} className="w-full h-full object-cover" alt="Student 1" />
            </div>
            
            {/* Top-right avatar - rounded on top-right AND bottom-left */}
            <div className="relative overflow-hidden bg-gradient-to-br from-purple-400 to-purple-500"
                 style={{ borderRadius: '0 90px 0 100px' }}>
              <img src={avatar} className="w-full h-full object-cover" alt="Student 2" />
            </div>
            
            {/* Bottom-left avatar - rounded on top-right AND bottom-left */}
            <div className="relative overflow-hidden bg-gradient-to-br from-purple-300 to-purple-400"
                 style={{ borderRadius: '0 100px 0 90px' }}>
              <img src={avatar} className="w-full h-full object-cover" alt="Student 3" />
            </div>
            
            {/* Bottom-right avatar - rounded on top-left AND bottom-right */}
            <div className="relative overflow-hidden bg-gradient-to-br from-pink-400 to-pink-500"
                 style={{ borderRadius: '100px 0 90px 0' }}>
              <img src={avatar} className="w-full h-full object-cover" alt="Student 4" />
            </div>
          </div>
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