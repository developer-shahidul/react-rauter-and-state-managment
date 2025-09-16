//

import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList } from "recharts";
import { Audio } from "react-loader-spinner";

const Phone = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  //   console.log(phones);
  // broken phone repository theke neya Api, progrming hero git theke neya
  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));

    // axios use
    axios("https://openapi.programming-hero.com/api/phones?search=iphone").then(
      (data) => {
        const phoneData = data.data.data;
        const phoesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phoesWithFakeData);
        setLoading(false);
      }
    );
  }, []);
  return (
    <div>
      {/* spinning */}
      {loading && (
        <div>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}

      <h2 className="text-5xl">Phones : {phones.length}</h2>
      <BarChart width={1200} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8">
          <LabelList dataKey="price" position="top" />
        </Bar>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phone;
