import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";
import ChartWrapper from "../Components/ui/ChartWrapper";
import CustomTooltip from "../Components/ui/Tooltip";

const netDailyPnL = [
  { x: "2025-01-01T10:30:00.000Z", y: 49.43422499999997 },
  { x: "2025-01-02T12:00:00.000Z", y: 68.98531500000013 },
  { x: "2025-01-02T15:30:00.000Z", y: -120.34874000000002 },
  { x: "2025-02-03T12:30:00.000Z", y: 592.9324500000002 },
  { x: "2025-03-05T15:20:00.000Z", y: 1381.9323000000004 },
];

function BarChartComponent() {
  return (
    <ChartWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={netDailyPnL}
          margin={{ top: 20, right: 20, left: 10, bottom: 20 }}
        >
          <CartesianGrid stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey="x"
            tickFormatter={(value) => new Date(value).toLocaleDateString()}
          />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="y">
            {netDailyPnL.map((item, index) => (
              <Cell key={index} fill={item.y > 0 ? "green" : "red"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

export default BarChartComponent;
