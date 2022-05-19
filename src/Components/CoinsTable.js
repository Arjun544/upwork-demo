import React from "react";
import { coinsData } from "../Data";
import CoinCell from "./CoinCell";
import CustomTable from "./CustomTable";
import TableActions from "./TableActions";

const CoinsTable = () => {
  const data =
    coinsData !== undefined &&
    coinsData?.map((item) => ({
      coin: item,
      name: item.thumbnail,
      label: item.label,
      icon: item.icon,
      total: item.total,
      available: item.available,
      inOrder: item.inOrder,
      BTCValue: item.BTCValue,
    }));

  const columns = [
    {
      Header: "Coin",
      accessor: "name",
      Cell: (props) => <CoinCell coin={props.cell.row.original.coin} />,
    },
    {
      Header: "Total",
      accessor: "total",
      Cell: (props) => (
        <span className="text-white text-sm tracking-wider font-normal cursor-pointer">
          {props.cell.value}
        </span>
      ),
    },
    {
      Header: "Available",
      accessor: "available",
      Cell: (props) => (
        <span className="text-white text-sm tracking-wider font-normal cursor-pointer">
          {props.cell.value}
        </span>
      ),
    },

    {
      Header: "In Order",
      accessor: "inOrder",
      Cell: (props) => (
        <span className="text-white text-sm tracking-wider font-normal cursor-pointer">
          {props.cell.value}
        </span>
      ),
    },
    {
      Header: "BTC Value",
      accessor: "BTCValue",
      Cell: (props) => (
        <span className="text-white text-sm tracking-wider font-normal cursor-pointer">
          {props.cell.value}
        </span>
      ),
    },
    {
      Header: "Action",
      Cell: (props) => <TableActions />,
    },
  ];
  return (
    <div className=" px-12">
      {data !== undefined && <CustomTable columns={columns} data={data} />}
    </div>
  );
};

export default CoinsTable;
