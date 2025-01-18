import React from 'react'

function Full() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {/* First Row: Full Width */}
      <div className="bg-blue-500 w-full p-6 text-white text-center">
        Full Width Row 1
      </div>

      {/* Second Row: Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-500 p-6 text-white text-center">
          Left Column
        </div>
        <div className="bg-red-500 p-6 text-white text-center">
          Right Column
        </div>
      </div>

      {/* Third Row: Full Width */}
      <div className="bg-purple-500 w-full p-6 text-white text-center">
        Full Width Row 3
      </div>
    </div>
  );
}

export default Full