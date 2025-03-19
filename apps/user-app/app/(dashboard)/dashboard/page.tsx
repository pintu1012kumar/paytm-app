'use client';

import React from 'react';

const Dashboard = () => {
  return (
    <div className="w-full h-screen bg-gray-50 p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-purple-600">Good afternoon, Pintu</h1>
      
      {/* Portfolio Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 mt-4">
        <p className="text-gray-500">Portfolio value</p>
        <h2 className="text-3xl font-bold">$0.00</h2>
        <div className="border-t mt-4">
          <p className="text-center text-gray-500 py-4">$0.00</p>
        </div>
      </div>
      
      {/* Timeframe Filters */}
      <div className="flex space-x-2 mt-4">
        {['1W', '1M', '3M', '6M', '1Y', 'ALL'].map((time) => (
          <button key={time} className="px-3 py-1 bg-gray-200 rounded-md text-sm font-medium focus:bg-purple-600 focus:text-white">
            {time}
          </button>
        ))}
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-around mt-6">
        {['Buy', 'Sell', 'Convert', 'Deposit', 'Withdraw'].map((action, index) => (
          <button key={index} className="flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-600 text-white flex justify-center items-center rounded-full shadow-md">
              {action[0]}
            </div>
            <span className="text-sm mt-2 font-medium text-gray-600">{action}</span>
          </button>
        ))}
      </div>
      
      {/* Info Card */}
      <div className="bg-white shadow-lg rounded-xl p-4 mt-6 flex items-center">
        <div className="flex-1">
          <h3 className="text-lg font-bold">Set up recurring buys</h3>
          <p className="text-gray-500 text-sm">Schedule regular crypto purchases to balance market fluctuations.</p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">Transfer Now</button>
      </div>
    </div>
  );
};

export default Dashboard;