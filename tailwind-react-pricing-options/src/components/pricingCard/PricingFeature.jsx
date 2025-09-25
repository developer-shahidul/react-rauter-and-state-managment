//
import { CircleCheck } from "lucide-react";

const PricingFeature = ({ feature }) => {
  //   console.log(feature);
  return (
    <p className="flex gap-4 m-4">
      <CircleCheck></CircleCheck>
      {feature}
    </p>
  );
};

export default PricingFeature;
