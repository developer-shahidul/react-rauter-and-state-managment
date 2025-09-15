//
import PriceOption from "../priceOption/PriceOption";

const PriceOptions = () => {
  // chatgpt => i need some json data that will have price option my gym .
  //  provide reallistic price option name . also add futures for each price oftions
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      price: 29,
      currency: "USD",
      duration: "per month",
      features: [
        "Access to cardio equipment",
        "Access to weight training area",
        "Locker room and shower access",
        "1 free fitness assessment",
        "Free Wi-Fi",
        "Water refill station access",
        "Standard opening hours access (6am - 10pm)",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 49,
      currency: "USD",
      duration: "per month",
      features: [
        "Everything in Basic",
        "Unlimited group fitness classes (Yoga, Zumba, HIIT)",
        "Free guest pass (2 per month)",
        "Access to sauna and steam room",
        "Free body composition analysis (quarterly)",
        "Weekend extended hours",
        "Discount on supplements and protein shakes (10%)",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 79,
      currency: "USD",
      duration: "per month",
      features: [
        "Everything in Standard",
        "Personal trainer (2 sessions per month)",
        "Nutrition consultation (monthly)",
        "Priority class booking",
        "Access to swimming pool",
        "Towel service included",
        "Free parking",
        "Exclusive premium locker access",
        "Invitations to gym events and workshops",
      ],
    },
    {
      id: 4,
      name: "Family Plan",
      price: 149,
      currency: "USD",
      duration: "per month",
      features: [
        "Everything in Premium",
        "Includes up to 4 family members",
        "Childcare service during workouts",
        "Discount on extra personal trainer sessions (20%)",
        "Family-only fitness classes",
        "1 Free family wellness consultation",
        "Access to kids' swimming pool",
      ],
    },
    {
      id: 5,
      name: "Annual VIP",
      price: 799,
      currency: "USD",
      duration: "per year",
      features: [
        "Unlimited access to all facilities",
        "Personal trainer (monthly sessions included)",
        "Advanced nutrition coaching (quarterly)",
        "VIP lounge access",
        "Free gym merchandise package",
        "Unlimited guest passes",
        "Priority access to new equipment and classes",
        "Exclusive networking and fitness events",
        "Massage therapy (1 session every 2 months)",
        "Early access to gym upgrades and facilities",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-5xl">Best Price in the town</h2>
      {priceOptions.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;
