//
import { LineChart, Line, XAxis, YAxis } from "recharts";

const ResultChart = () => {
  const resultData = [
    {
      id: 1,
      name: "Rahim",
      Bangla: 78,
      English: 85,
      Mathematics: 92,
      Physics: 88,
      Chemistry: 81,
      Biology: 75,
      History: 69,
      Geography: 72,
      ICT: 90,
      Religion: 80,
    },
    {
      id: 2,
      name: "Karim",
      Bangla: 82,
      English: 79,
      Mathematics: 88,
      Physics: 91,
      Chemistry: 85,
      Biology: 74,
      History: 72,
      Geography: 77,
      ICT: 86,
      Religion: 84,
    },
    {
      id: 3,
      name: "Sadia",
      Bangla: 90,
      English: 87,
      Mathematics: 95,
      Physics: 89,
      Chemistry: 92,
      Biology: 85,
      History: 80,
      Geography: 78,
      ICT: 93,
      Religion: 88,
    },
    {
      id: 4,
      name: "Nafis",
      Bangla: 70,
      English: 73,
      Mathematics: 85,
      Physics: 80,
      Chemistry: 76,
      Biology: 72,
      History: 68,
      Geography: 70,
      ICT: 82,
      Religion: 75,
    },
    {
      id: 5,
      name: "Mitu",
      Bangla: 85,
      English: 88,
      Mathematics: 90,
      Physics: 84,
      Chemistry: 86,
      Biology: 80,
      History: 74,
      Geography: 79,
      ICT: 89,
      Religion: 83,
    },
    {
      id: 6,
      name: "Rakib",
      Bangla: 76,
      English: 81,
      Mathematics: 84,
      Physics: 79,
      Chemistry: 77,
      Biology: 73,
      History: 70,
      Geography: 71,
      ICT: 85,
      Religion: 78,
    },
    {
      id: 7,
      name: "Jannat",
      Bangla: 88,
      English: 92,
      Mathematics: 96,
      Physics: 90,
      Chemistry: 89,
      Biology: 84,
      History: 81,
      Geography: 83,
      ICT: 94,
      Religion: 87,
    },
    {
      id: 8,
      name: "Hasib",
      Bangla: 72,
      English: 75,
      Mathematics: 80,
      Physics: 78,
      Chemistry: 74,
      Biology: 70,
      History: 67,
      Geography: 69,
      ICT: 81,
      Religion: 73,
    },
    {
      id: 9,
      name: "Rima",
      Bangla: 84,
      English: 89,
      Mathematics: 91,
      Physics: 87,
      Chemistry: 90,
      Biology: 83,
      History: 76,
      Geography: 82,
      ICT: 92,
      Religion: 85,
    },
    {
      id: 10,
      name: "Sohan",
      Bangla: 79,
      English: 82,
      Mathematics: 87,
      Physics: 83,
      Chemistry: 80,
      Biology: 76,
      History: 71,
      Geography: 74,
      ICT: 88,
      Religion: 79,
    },
  ];
  return (
    <div>
      <LineChart width={1200} height={300} data={resultData}>
        <Line dataKey="Bangla" stroke="red" />
        <Line dataKey="English" stroke="yellow" />
        <Line dataKey="Mathematics" stroke="blue" />
        <Line dataKey="Physics" stroke="green" />
        <Line dataKey="Chemistry" stroke="orange" />
        <Line dataKey="Biology" stroke="purple" />
        <Line dataKey="History" stroke="pink" />
        <Line dataKey="Geography" stroke="brown" />
        <Line dataKey="ICT" stroke="red" />
        <Line dataKey="Religion" stroke="green" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
      </LineChart>
    </div>
  );
};

export default ResultChart;
