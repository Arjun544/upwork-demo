import React from "react";

const TableActions = () => {
  return (
    <div className="flex items-center gap-6">
      <p className="text-amber-400 underline text-base tracking-wider cursor-pointer">
        Deposit
      </p>
      <p className="text-amber-400 underline text-base tracking-wider cursor-pointer">
        Withdraw
      </p>
      <p className="text-amber-400 underline text-base tracking-wider cursor-pointer">
        Recent Transcation
      </p>
    </div>
  );
};

export default TableActions;
