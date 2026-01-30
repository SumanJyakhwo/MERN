function OfferCard({ title, description, discount }) {
  return (
    <div className="bg-gradient-to-r from-[#B56CFF] to-[#E889E8] rounded-[20px] p-[32px] text-white shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
      <span className="text-[40px] font-[700]">{discount}</span>
      <h3 className="text-[20px] font-[700] mt-[8px] mb-[8px]">
        {title}
      </h3>
      <p className="text-[14px] text-white/90 mb-[20px]">
        {description}
      </p>

      <button className="px-[24px] py-[10px] bg-white text-[#9B5CF6] rounded-[10px] font-[600]">
        Claim Offer
      </button>
    </div>
  );
}


export default OfferCard;