import OfferCard from "../cards/OfferCard";
import PageHeader from "../components/common/PageHeader";


function OffersPage() {
  return (
    <div className="bg-[#F9F5FF] font-inter">
      <PageHeader
        title="Special Offers"
        subtitle="Save more with exclusive discounts"
      />

      <section className="max-w-[1200px] mx-auto px-[24px] py-[60px]">
        <div className="grid grid-cols-2 gap-[24px]">
          <OfferCard
            title="Recommendation Discount"
            description="Invite friends and get 15% off"
            discount="15%"
          />
          <OfferCard
            title="Festive Discount"
            description="Celebrate with 25% off selected courses"
            discount="25%"
          />
          <OfferCard
            title="One-Time Payment Discount"
            description="Pay once and save more"
            discount="20%"
          />
          <OfferCard
            title="Limited Time Offer"
            description="Exclusive deal for new learners"
            discount="30%"
          />
        </div>
      </section>
    </div>
  );
}


export default OffersPage;