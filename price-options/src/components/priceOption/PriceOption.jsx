//

import Features from "../features/Features";

Features;
const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="flex flex-col bg-blue-500 rounded-b-md p-4 text-white">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-3xl">/mon</span>
      </h2>
      <h4 className="text-center text-3xl my-8">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature, index) => (
          <Features key={index} feture={feature}></Features>
        ))}
      </div>
      <button className="mt-12 bg-green-600 w-full py-4 rounded-xl font-bold hover:bg-green-950">
        Buy now
      </button>
    </div>
  );
};

export default PriceOption;
