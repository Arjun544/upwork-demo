import React from "react";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from "react-table";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="w-full flex flex-col justify-between items-center pt-3 mt-4 md:flex md:flex-row">
      <div className="flex items-center border border-amber-400 rounded-lg py-3 px-3 gap-3 ">
        <RiSearchLine size={22} className="fill-slate-400" />
        <input
          type="text"
          className="rounded-xl text-slate-400 placeholder-salte-400 bg-transparent border-0 outline-none"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder="Search"
        />
      </div>
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <input type="checkbox" className="accent-amber-400" />
        <p className="text-white">Hide Small Balances</p>
      </div>
    </div>
  );
}

function CustomTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      autoResetPage: false,
      autoResetFilters: false,
    },

    useFilters, // useFilters!
    useGlobalFilter,
    useSortBy
  );

  if (data.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center pt-16 gap-4">
        <span className="text-black text-lg font-semibold tracking-widest">
          No Coins
        </span>
        <div
          onClick={(e) => {
            e.preventDefault();
          }}
          className="flex h-12 w-40 bg-customYellow-light rounded-2xl cursor-pointer items-center justify-center transform hover:scale-95 transition duration-500 ease-in-out"
        >
        </div>
      </div>
    );
  }

  // Render the UI for your table
  return (
    <div className="w-full">
      <div className=" sm:flex sm:gap-x-2">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div className="mt-2 sm:mt-0" key={column.id}>
                {column.render("Filter")}
              </div>
            ) : null
          )
        )}
      </div>
      {/* table */}
      <div className="mt-4 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="">
              <table {...getTableProps()} className="min-w-full gap-2">
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column, i) => (
                        // Add the sorting props to control sorting. For this example
                        // we can add them into the header props
                        <th
                          scope="col"
                          className={`group px-6 py-3 text-left text-base font-bold text-amber-400 tracking-wider border-b border-slate-50 border-opacity-20 ${
                            i !== headerGroup.headers.length -1 && "border-r"
                          }`}
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          <div className="flex items-center justify-between">
                            {column.render("Header")}
                            {/* Add a sort direction indicator */}
                            <span>
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <FaSort className="w-4 h-4 text-gray-400 hover:text-amber-400" />
                                ) : (
                                  <FaSortUp className="w-4 h-4 text-gray-400 hover:text-amber-400" />
                                )
                              ) : (
                                <FaSort className="w-4 h-4 text-gray-400 hover:text-amber-400" />
                              )}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows?.map((row, i) => {
                    // new
                    prepareRow(row);
                    return (
                      <tr
                        className={`text-gray-500 text-sm font-semibold }`}
                        {...row.getRowProps()}
                      >
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className={`px-6 py-3 whitespace-nowrap font-semibold ${
                                i % 2 === 0
                                  ? "bg-gray-600 bg-opacity-50 "
                                  : "bg-transparent"
                              } ${
                                cell.column.Header === "Coin" &&
                                "rounded-tl-xl rounded-bl-xl"
                              }  ${
                                cell.column.Header === "Action" &&
                                "rounded-tr-xl rounded-br-xl"
                              }`}
                              role="cell"
                            >
                              {cell.column.Cell.name === "defaultRenderer" ? (
                                <div
                                  className={`text-sm font-semibold  ${(() => {
                                    if (cell.column.Header === "Name")
                                      return "text-green-500 cursor-pointer";
                                    else {
                                      return "text-gray-500";
                                    }
                                  })()}`}
                                >
                                  cell.render("Cell")
                                </div>
                              ) : (
                                cell.render("Cell")
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomTable;
