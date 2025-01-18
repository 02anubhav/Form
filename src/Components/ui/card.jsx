export function Card({ children }) {
    return <div className="p-4 bg-white shadow-md rounded-md">{children}</div>;
  }
  
  export function CardHeader({ children }) {
    return <div className="mb-4">{children}</div>;
  }
  
  export function CardTitle({ children }) {
    return <h2 className="text-lg font-bold">{children}</h2>;
  }
  
  export function CardDescription({ children }) {
    return <p className="text-sm text-gray-500">{children}</p>;
  }
  
  export function CardContent({ children }) {
    return <div>{children}</div>;
  }
  
  export function CardFooter({ children, className }) {
    return <div className={`${className}`}>{children}</div>;
  }
  