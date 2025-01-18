import React from 'react';
import './index.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Profit/Loss Calendar</title>
        <meta name="description" content="Calendar showing profit and loss dates" />
      </head>
      <body className="bg-gray-100 font-sans">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
