//
import PricingCard from "../pricingCard/PricingCard";
import DaisiPricingCard from "../daisiPricingCard/DaisiPricingCard";
import { use } from "react";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div>
      <h2 className="text-5xl">Get our membership</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingData.map((pricing, idx) => (
          <DaisiPricingCard
            key={`${pricing.id}-${idx}`}
            pricing={pricing}
          ></DaisiPricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
