import React from "react";

const CoinCell = ({ coin }) => {
  console.log("coinnnnn", coin);
  return (
    <div className="flex items-center gap-4">
      <i>{ coin.icon}</i>
      <p className="text-white text-base">{coin.name }</p>
      <p className="text-amber-400 px-2 py-0.5 rounded-3xl text-[8px] bg-black">{coin.label }</p>
    </div>
  );
};

export default CoinCell;
