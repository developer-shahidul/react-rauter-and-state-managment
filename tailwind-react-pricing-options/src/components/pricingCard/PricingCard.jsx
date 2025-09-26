//

import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  //   console.log(pricing);
  const { planName, price, description, features } = pricing;
  return (
    <div className="flex flex-col border rounded-xl bg-amber-600 p-4">
      {/* card header */}
      <div>
        <h2 className="text-7xl">{planName}</h2>
        <h4 className="text-3xl">{price}</h4>
      </div>
      <div className="flex-1   bg-amber-400 p-4 rounded-2xl ">
        <p>{description}</p>
        {features.map((feature, index) => (
          <PricingFeature feature={feature} key={index}></PricingFeature>
        ))}
      </div>
      <button className="btn  w-full mt-4">Subscribe</button>
    </div>
  );
};

export default PricingCard;
