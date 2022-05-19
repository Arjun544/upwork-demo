import React from "react";

const CoinCell = ({ coin }) => {
  console.log("coinnnnn", coin);
  return (
    <div className="flex items-center gap-4">
      <i>{ coin.icon}</i>
      <p className="text-white text-base">{coin.name }</p>
    </div>
  );
};

export default CoinCell;
