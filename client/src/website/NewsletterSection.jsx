function NewsletterSection() {
  return (
    <section className="bg-[#F9F5FF] py-[80px]">
      <div className="max-w-[800px] mx-auto px-[24px] text-center">
        <h2 className="text-[36px] font-[700] mb-[16px]">
          Get In Touch!
        </h2>
        <p className="text-[16px] text-[#6B7280] mb-[32px]">
          Subscribe to get updates and promotions.
        </p>

        <div className="flex gap-[16px] justify-center">
          <input
            className="w-[360px] px-[20px] py-[14px] rounded-[14px] border border-[#E5E7EB]"
            placeholder="Enter your email"
          />
          <button className="px-[28px] bg-[#9B5CF6] text-white rounded-[14px] font-[600]">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
export default NewsletterSection;