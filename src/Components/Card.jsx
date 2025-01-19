import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Card = ({ title, value, color }) => {
  // Determine if the value is positive or negative
  const isPositive = parseFloat(value) >= 0;

  return (
    <div className=" border-[#27272a] border rounded-lg  shadow-sm p-4  hover:shadow-md transition-shadow  flex-wrap bg-black ">
      <div className="flex justify-between items-start ">
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
    </div>
  );
};

export default Card;
