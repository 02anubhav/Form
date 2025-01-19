import React from "react";
import {
  MdOutlineSync,
  MdDashboard,
  MdAssessment,
  MdInsights,
  MdForum,
  MdAnalytics,
  MdTimeline,
  MdOutlineDangerous,
} from "react-icons/md"; 

const cardData = [
  {
    title: "Auto-Sync with Brokers",
    description:
      "Seamlessly fetch trading data from broker accounts to eliminate manual entry.",
    icon: <MdOutlineSync />, 
  },
  {
    title: "Comprehensive Analytics Dashboard",
    description:
      "Gain a clear overview of key metrics like P&L, win rates, and drawdowns at a glance.",
    icon: <MdDashboard />, 
  },
  {
    title: "Strategy Backtesting",
    description:
      "Test trading strategies on historical data to refine and optimize performance.",
    icon: <MdAssessment />, 
  },
  {
    title: "Trade Insights",
    description:
      "Receive actionable insights to identify profitable patterns and areas for improvement.",
    icon: <MdInsights />, 
  },
  {
    title: "Community Forum",
    description:
      "Engage with a vibrant trader community to exchange strategies, tips, and learnings.",
    icon: <MdForum />, 
  },
  {
    title: "AI-Powered Insights",
    description:
      "Leverage AI to analyze trades, detect patterns, and suggest smarter strategies.",
    icon: <MdAnalytics />,
  },
  {
    title: "Daily and Hourly Performance Breakdown",
    description:
      "Track P&L by day and time to uncover when you perform best in the market.",
    icon: <MdTimeline />, 
  },
  {
    title: "Risk Management Tools",
    description:
      "Monitor critical metrics like drawdowns and position sizes to stay in control of risks.",
    icon: <MdOutlineDangerous />,
  },
];

const Card = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold pb-8">
          What We Offer
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full h-60 p-6 border border-gray-700 rounded-lg bg-gray-900 hover:border-[#7d12ff] hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col justify-center text-center"
          >
            <div className="mb-4  text-4xl">
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold text-zinc-50 mb-4">
              {card.title}
            </h3>
            <p className="text-gray-400 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
