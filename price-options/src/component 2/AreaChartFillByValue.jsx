//
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChartFillByValue = () => {
  const data = [
    { name: "Mon", calories: 500, steps: 8000, burned: 2200 },
    { name: "Tue", calories: -200, steps: 6000, burned: 1800 },
    { name: "Wed", calories: 700, steps: 10000, burned: 2500 },
    { name: "Thu", calories: -300, steps: 4000, burned: 1700 },
    { name: "Fri", calories: 400, steps: 8500, burned: 2300 },
    { name: "Sat", calories: 1000, steps: 12000, burned: 2800 },
    { name: "Sun", calories: -500, steps: 3000, burned: 1600 },
  ];
  const gradientOffset = () => {
    const max = Math.max(...data.map((i) => i.calories));
    const min = Math.min(...data.map((i) => i.calories));

    if (max <= 0) {
      return 0;
    }
    if (min >= 0) {
      return 1;
    }
    return max / (max - min);
  };
  const off = gradientOffset();

  return (
    <AreaChart
      width={1200}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <defs>
        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="green" stopOpacity={1} />
          <stop offset={off} stopColor="green" stopOpacity={1} />
          <stop offset={off} stopColor="red" stopOpacity={1} />
          <stop offset="100%" stopColor="red" stopOpacity={1} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="calories"
        stroke="#000"
        fill="url(#splitColor)"
      />
    </AreaChart>
  );
};

export default AreaChartFillByValue;
