import React from "react";
import "./App.css"

const Hero = () => {
  return (
    <section className="bg-black  text-white py-12   px-6 flex ">
      <div className="max-w-5xl mx-auto text-center">
        {/* Top Button/Badge */}
        <button className="text-sm text-gray-300 mb-6 font-mono px-4 py-1 rounded-full border-2 border-[#7d12ff] hover:text-white hover:border-white transition duration-300 relative overflow-hidden">
          <span className="inline-block w-full animate-typing-button mt-2">
            Made by Traders, For Traderss
          </span>
        </button>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transform Your Trading with Seamless
          <br />
          <span className="text-[#ab20fd] italic">Journaling</span> and
          <span className="text-[#ab20fd] italic"> Analysis</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Track your trades, analyze your strategies, and automate your edge for
          consistent success.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#ab20fd] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7d12ff] transition duration-300 shadow-lg">
            Explore Tradylytics →
          </button>
          <button className="bg-gray-800 px-8 py-3 rounded-full text-white font-medium hover:bg-gray-700 transition duration-300 shadow-lg">
            Connect →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
