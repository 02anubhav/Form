import Sidebar from "./Sidebar";
import React from "react";
import Card from "./Card";
import BarChartComponent from "./BarChartComponent";
import NetDailyPnL from "./NetDailyPnL";
import ProfitLossCalendar from "./ProfitLossCalendar";
import RootLayout from "./RootLayout";


const Dashboard = () => {
  return (
    <div className="flex w-full h-full bg-black ">
      {/* Sidebar Component */}
      <Sidebar />
      <div className="grid grid-cols-1 w-full">
        {/* Header */}
        <header className="pl-6 pt-4 pb-2  w-full border-b border-[#27272a]">
          <h1 className="text-2xl font-bold ml-8 text-white">Dashboard</h1>
          <p className="text-zinc-50 ml-8 text-sm">
            Welcome to your trading overview
          </p>
        </header>

        {/* First Row: Cards */}
        <div className="p-4  flex flex-col items-center    w-full">
          <div className="grid grid-cols-1   sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <Card
              title="Win Rate"
              value="65%"
              color="blue"
              chartData={[40, 60, 45, 70, 55, 65]}
            />
            <Card
              title="Average Win"
              value="-1,234"
              color="green"
              chartData={[30, 50, 65, 45, 60, 75]}
            />
            <Card
              title="Realized P&L"
              value="0"
              color="purple"
              chartData={[50, 40, 60, 70, 55, 80]}
            />
            <Card
              title="Number of Trades"
              value="156"
              color="orange"
              chartData={[60, 45, 55, 65, 70, 50]}
            />
            <Card
              title="Daily Return"
              value="2.4%"
              color="cyan"
              chartData={[40, 55, 45, 60, 50, 65]}
            />
          </div>
        </div>

        {/* Second Row: Bar Chart */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
          <div className="w-full h-96 bg-[#1a1a1a] rounded-lg">
            <BarChartComponent />
          </div>
          <div className="w-full bg-[#1a1a1a] rounded-lg">
            <NetDailyPnL />
          </div>
        </div>

        {/* Third Row: Footer */}
        <div className="w-full ">
          <RootLayout>
            <ProfitLossCalendar />
          </RootLayout>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
