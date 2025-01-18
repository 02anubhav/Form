const Sidebar = () => {
  const menuItems = ["Dashboard", "Trade History", "Deep Insights", "Reports", "Trade Book" ,"Strategies", "Education", "Community", "Support", ];

  return (
    <div className="w-64 bg-black shadow-lg border-r border-[#27272a] h-full">
      {/* Logo Section */}
      <div className="p-4 pb-7 border-b border-[#27272a]">
        <div className="flex justify-center items-center space-x-2">
          <span className="text-2xl font-bold text-[#AB20FD]">TradyLytics</span>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="p-4">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#dashboard"
                className="font-medium text-zinc-50 hover:text-[#AB20FD] transition-all"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
