import React from "react";

const Spring = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex space-x-4">
        <div className="w-4 h-4 bg-sky-600 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-sky-600 rounded-full animate-bounce delay-150"></div>
        <div className="w-4 h-4 bg-sky-600 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

export default Spring;
