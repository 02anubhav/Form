import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Card = ({ title, value, color, chartData }) => {
  // Determine if the value is positive or negative
  const isPositive = parseFloat(value) >= 0;

  // Calculate average of chartData
  const avgValue =
    chartData.reduce((sum, val) => sum + val, 0) / chartData.length;

  // Generate points for the line chart
  const maxValue = Math.max(...chartData);
  const points = chartData
    .map((val, index) => {
      const x = (index / (chartData.length - 1)) * 100; // Spread points evenly across the width
      const y = 100 - (val / maxValue) * 100; // Scale values to fit within 100% height
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="bg-black border-[#27272a] border rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow w-48 flex-shrink-0">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-zinc-50">{title}</h3>
          <p
            className={`text-2xl font-bold mt-2 ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {value}
          </p>
        </div>
        <div
          className={`w-6 h-6 bg-${color}-100 rounded-lg flex items-center justify-center`}
        >
          {isPositive ? (
            <FaArrowUp className="text-green-500" />
          ) : (
            <FaArrowDown className="text-red-500" />
          )}
        </div>
      </div>
      <div className="mt-4">
        {/* Line chart */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-20"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          <line
            x1="0"
            y1="25"
            x2="100"
            y2="25"
            stroke="gray"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="50"
            x2="100"
            y2="50"
            stroke="gray"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="75"
            x2="100"
            y2="75"
            stroke="gray"
            strokeWidth="0.5"
          />

          {/* Line path */}
          <polyline
            points={points}
            fill="none"
            className={`stroke-${color}-500`}
            strokeWidth="2"
          />

          {/* Average line */}
          <line
            x1="0"
            y1={100 - (avgValue / maxValue) * 100}
            x2="100"
            y2={100 - (avgValue / maxValue) * 100}
            stroke={`var(--tw-color-${color}-300)`}
            strokeWidth="1"
            strokeDasharray="4 2"
          />

          {/* Dots */}
          {chartData.map((val, index) => {
            const x = (index / (chartData.length - 1)) * 100;
            const y = 100 - (val / maxValue) * 100;
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="2"
                className={`fill-${color}-500`}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default Card;
