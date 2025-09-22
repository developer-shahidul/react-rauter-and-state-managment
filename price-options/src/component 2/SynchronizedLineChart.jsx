//
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SynchronizedLineChart = () => {
  const calories = [
    { day: "Mon", calories: 600 },
    { day: "Tue", calories: 1200 },
    { day: "Wed", calories: 2300 },
    { day: "Thu", calories: 1850 },
    { day: "Fri", calories: 2400 },
    { day: "Sat", calories: 1400 },
    { day: "Sun", calories: 2350 },
  ];

  return (
    <div className="mx-10">
      <AreaChart data={calories} width={1200} height={400}>
        <CartesianGrid strokeDasharray="5 0" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="calories"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>
    </div>
  );
};

export default SynchronizedLineChart;
