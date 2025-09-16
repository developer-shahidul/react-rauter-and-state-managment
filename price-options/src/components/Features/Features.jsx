//
import { AiFillCheckCircle } from "react-icons/ai";

const Features = ({ feture }) => {
  console.log(feture);
  return (
    <div>
      <p className="flex items-center  ">
        <AiFillCheckCircle className="text-green-500 mr-4" />
        {feture}
      </p>
    </div>
  );
};

export default Features;
