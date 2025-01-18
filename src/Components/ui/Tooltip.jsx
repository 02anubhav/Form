import React from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { x, y } = payload[0].payload;
    return (
      <div className="p-2 bg-white border rounded shadow-md text-sm">
        <p>Date: {new Date(x).toLocaleString()}</p>
        <p>Net PnL: {y.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
