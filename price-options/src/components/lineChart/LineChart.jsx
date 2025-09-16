//
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

// lineChart dublicate hoice tai as LChart disi

const LineChart = () => {
  const marksData = [
    { id: 1, name: "Rahim", math: 40, physics: 35, chemistry: 38 },
    { id: 2, name: "Karim", math: 55, physics: 48, chemistry: 45 },
    { id: 3, name: "Jamal", math: 65, physics: 60, chemistry: 58 },
    { id: 4, name: "Kamal", math: 72, physics: 68, chemistry: 65 },
    { id: 5, name: "Selim", math: 60, physics: 55, chemistry: 52 },
    { id: 6, name: "Babul", math: 78, physics: 70, chemistry: 68 },
    { id: 7, name: "Shimul", math: 85, physics: 80, chemistry: 78 },
    { id: 8, name: "Nasrin", math: 90, physics: 85, chemistry: 82 },
    { id: 9, name: "Mitu", math: 88, physics: 83, chemistry: 80 },
    { id: 10, name: "Rafsan", math: 95, physics: 90, chemistry: 88 },
  ];

  // datakey holo kun data dekhaiba
  // stroke holo color

  return (
    <div>
      <LChart width={800} height={400} data={marksData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="physics" stroke="yellow"></Line>
        <Line dataKey="chemistry" stroke="tomato"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
