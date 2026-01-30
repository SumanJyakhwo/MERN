function NewsletterCTASection() {
  return (
    <section className="bg-[#F9F5FF] pt-[100px] pb-[120px]">
      <div className="max-w-[1200px] mx-auto px-[24px]">
        
        {/* Outer rounded container */}
        <div className="bg-[#FFF7FB] rounded-[48px] py-[72px] flex justify-center">
          
          {/* Inner CTA card */}
          <div className="bg-gradient-to-r from-[#B56CFF] to-[#E889E8] rounded-[20px] px-[64px] py-[40px] w-[720px] text-center shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
            
            <h2 className="text-[24px] font-[700] text-white mb-[8px]">
              Get In Touch!
            </h2>

            <p className="text-[14px] text-white/90 mb-[24px]">
              Subscribe to get in touch and enjoy discounts,
              <br />
              promos and much more!
            </p>

            <div className="flex justify-center gap-[12px]">
              <input
                className="w-[360px] px-[16px] py-[12px] rounded-[10px] text-[14px] text-[#1F2937] outline-none"
                placeholder="Enter your email."
              />

              <button className="px-[24px] py-[12px] bg-white text-[#9B5CF6] rounded-[10px] text-[14px] font-[600]">
                Subscribe
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default NewsletterCTASection