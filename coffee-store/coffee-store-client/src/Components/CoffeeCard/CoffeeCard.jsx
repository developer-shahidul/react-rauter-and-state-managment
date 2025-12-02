//
import { Eye, Pencil, Trash } from "lucide-react";

const CoffeeCard = ({ coffee }) => {
  //   console.log(coffee);

  const { name, chef, supplier, taste, photo, details } = coffee;
  return (
    <div className="bg-[#F5F4F1] flex justify-between items-center p-7 rounded-[10px] backdrop-opacity-60">
      <div>
        <img className="h-60 w-40 object-cover" src={photo} alt="img" />
      </div>
      <div className="text-left text-xl">
        <p>
          <span className="raleway font-semibold">Name:</span>
          <span className="text-gray-700 ml-2 raleway">{name}</span>
        </p>
        <p>
          <span className="font-semibold raleway">Chef:</span>
          <span className="text-gray-700 ml-2 raleway">{chef}</span>
        </p>
        <p>
          <span className="font-semibold raleway">Supplier:</span>
          <span className="text-gray-700 ml-2 raleway">{supplier}</span>
        </p>
        <p>
          <span className="font-semibold raleway">Taste:</span>
          <span className="text-gray-700 ml-2 raleway">{taste}</span>
        </p>
        <p>
          <span className="font-semibold raleway">Details:</span>
          <span className="text-gray-700 ml-2 raleway">{details}</span>
        </p>
        <p>
          <span className="font-semibold raleway">Price:</span>
          <span className="text-gray-700 ml-2 raleway">890 Taka</span>
        </p>
      </div>
      <div className="space-y-4">
        <div className="w-10 h-10 bg-[#D2B48C] flex items-center justify-center rounded-[5px] cursor-pointer">
          <Eye color="white" height="20px" width="20px" />
        </div>
        <div className="w-10 h-10  bg-[#3C393B] flex items-center justify-center rounded-[5px] cursor-pointer">
          <Pencil color="#FFFFFF" height="20px" width="20px" />
        </div>
        <div className="w-10 h-10  bg-[#EA4744] flex items-center justify-center rounded-[5px] cursor-pointer">
          <Trash color="#FFFFFF" height="20px" width="20px" />
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

//  https://i.ibb.co.com/YFRpsCPn/5.png
//   https://i.ibb.co.com/v45ZFhdY/4.png
//  https://i.ibb.co.com/6RGmNKLr/3.png
//   https://i.ibb.co.com/j1Kg0X2/2.png
//  https://i.ibb.co.com/cPR7LLk/1.png
// https://i.ibb.co.com/wZpq53CV/6.png
