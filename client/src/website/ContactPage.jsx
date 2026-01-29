import PageHeader from "./PageHeader";

function ContactPage() {
  return (
    <div className="bg-[#F9F5FF] font-inter">
      <PageHeader
        title="Contact Us"
        subtitle="We’d love to hear from you"
      />

      <section className="max-w-[1200px] mx-auto px-[24px] py-[60px] grid grid-cols-2 gap-[40px]">
        
        {/* Inquiry Form */}
        <div className="bg-white rounded-[20px] p-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <h3 className="text-[20px] font-[700] mb-[20px]">
            Send an Inquiry
          </h3>

          <div className="space-y-[16px]">
            <input
              placeholder="Full Name"
              className="w-full px-[16px] py-[12px] border border-[#E5E7EB] rounded-[10px]"
            />
            <input
              placeholder="Email"
              className="w-full px-[16px] py-[12px] border border-[#E5E7EB] rounded-[10px]"
            />
            <input
              placeholder="Subject"
              className="w-full px-[16px] py-[12px] border border-[#E5E7EB] rounded-[10px]"
            />
            <textarea
              placeholder="Your message"
              className="w-full px-[16px] py-[12px] border border-[#E5E7EB] rounded-[10px] h-[120px]"
            />
          </div>

          <button className="mt-[24px] w-full py-[12px] bg-[#9B5CF6] text-white rounded-[12px] font-[600]">
            Submit Inquiry
          </button>
        </div>

        {/* Info */}
        <div className="bg-gradient-to-r from-[#B56CFF] to-[#E889E8] rounded-[20px] p-[32px] text-white">
          <h3 className="text-[20px] font-[700] mb-[16px]">
            Contact Information
          </h3>

          <p className="text-[14px] text-white/90 mb-[12px]">
            📧 etechinfo@gmail.com
          </p>
          <p className="text-[14px] text-white/90 mb-[12px]">
            📞 +1 (555) 123-4567
          </p>
          <p className="text-[14px] text-white/90">
            📍 Online Support Worldwide
          </p>
        </div>

      </section>
    </div>
  );
}

export default ContactPage