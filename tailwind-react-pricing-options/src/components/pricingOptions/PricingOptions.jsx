//
import PricingCard from "../pricingCard/PricingCard";
import { use } from "react";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div>
      <h2 className="text-5xl">Get our membership</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
