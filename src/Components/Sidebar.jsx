import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    "Dashboard",
    "Trade History",
    "Deep Insights",
    "Reports",
    "Trade Book",
    "Strategies",
    "Education",
    "Community",
    "Support",
  ];

  return (
    <div>
      {/* Toggle Button for Mobile */}
      <button
        className="p-4 text-white bg-black fixed top-0 left-0 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-black shadow-lg border-r border-[#27272a] z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0 lg:static lg:w-64`}
      >
        {/* Logo Section */}
        <div className="p-6 pb-4 border-b border-[#27272a]">
          <div className="flex justify-center items-center space-x-2">
            <span className="text-3xl sm:ml-8 md:ml-8 lg:ml-0 font-bold text-[#AB20FD]">
              TradyLytics
            </span>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="p-6">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-medium text-md text-zinc-50 hover:text-[#AB20FD] transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay (for mobile when sidebar is open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;

