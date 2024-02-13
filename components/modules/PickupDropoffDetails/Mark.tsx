import React from "react";

const Mark: React.FC<{ isPickUp: boolean }> = ({ isPickUp }) => {
  return (
    <div className="w-4 h-4 rounded-full bg-primary-200 flex items-center justify-center">
      <div
        className={`w-2 h-2 rounded-full ${
          isPickUp ? "bg-primary-600" : "bg-information-500"
        }`}
      ></div>
    </div>
  );
};

export default Mark;
