export function ChartContainer({ children }) {
    return <div className="w-full h-80">{children}</div>;
  }
  
  export function ChartTooltip({ children }) {
    return <>{children}</>;
  }
  
  export function ChartTooltipContent({ indicator }) {
    return <div className="bg-white p-2 shadow">{indicator}</div>;
  }
  