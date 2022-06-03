import TablePagination from "./TablePagination";
import { useTable, usePagination } from "react-table";
import TableContentData from "./TableContentData";
import { ContentClasses, TitleClasses } from "./TableClassServices";
import { useSelector } from "react-redux";
import { COLUMNS } from "./columns.js";
import { useMemo, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
export default function Table() {
  const DATA = useSelector((state) => state.data);
  const filters = useSelector((state) => state.filters);
  const columns = useMemo(() => COLUMNS, []);
  const [watch, setWatch] = useState({});

  const data = useMemo(() => {
    let temp = DATA;

    if (filters.text && filters.text !== "") {
      temp = temp.filter(
        (el) =>
          el.name.toLowerCase().includes(filters.text.toLowerCase()) ||
          el.createdBy.toLowerCase().includes(filters.text.toLowerCase())
      );
    }

    if (filters.startDate && filters.endDate) {
      temp = temp.filter((el) =>
        moment(moment(el.configuredAt, "DD-MM-YYYY")).isBetween(
          moment(filters.startDate, "DD-MM-YYYY"),
          moment(filters.endDate, "DD-MM-YYYY")
        )
      );
    }

    if (filters.status) {
      const helper = filters.status === "yes";
      temp = temp.filter((el) => el.status === helper);
    }

    if (filters.createdBy) {
      temp = temp.filter((el) => el.createdBy === filters.createdBy);
    }

    if (filters.satelliteDishes) {
      temp = temp.filter((el) =>
        el.satelliteDishes.includes(filters.satelliteDishes)
      );
    }

    if (filters.city) {
      temp = temp.filter((el) => el.city === filters.city);
    }

    return temp;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const tableInstance = useTable(
    { columns, data, initialState: { pageSize: 7 } },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    state,
  } = tableInstance;
  const { pageIndex } = state;
  return (
    <div>
      <table className="mt-6 pr-2 w-full border-separate" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, idx) => (
                <th
                  className={`text-base font-normal bg-customtableheading1 dark:bg-pallate2 dark:text-white border border-semiBlack dark:border-white first:rounded-tl last:rounded-tr 
                  ${TitleClasses(column.id)} 
                  ${idx === 0 ? "" : "border-l-0"}
                  `}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
              <th className="xl:hidden border-l-0 table-cell text-base font-normal bg-customtableheading1 dark:bg-pallate2 dark:text-white border border-semiBlack dark:border-white first:rounded-tl last:rounded-tr">
                Open
              </th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, idx) => {
                  return (
                    <td
                      className={`p-3 align-top border dark:text-white dark:border-white border-t-0 text-base font-normal border-semiBlack 
                      ${ContentClasses(cell.column.id)} 
                      ${
                        index === data.length - 1
                          ? "first:rounded-bl last:rounded-br"
                          : ""
                      } 
                      ${idx === 0 ? "" : "border-l-0"}
                    `}
                      {...cell.getCellProps()}
                    >
                      {TableContentData(cell)}
                    </td>
                  );
                })}
                <td className=" xl:hidden sm:p-3 p-0.5 text-xs sm:text-base align-middle text-center border border-l-0 dark:text-white dark:border-white border-t-0 font-normal border-semiBlack">
                  <button
                    onClick={() => {
                      setWatch(row.original);
                    }}
                    className="bg-pallate1 w-7 h-7 p-0.5 rounded text-white dark:bg-pallate2 transition-all shadow hover:drop-shadow-md hover:shadow-gray-400 dark:shadow-none dark:border-0"
                  >
                    <AiFillEye className="w-full h-full" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {data.length === 0 && (
        <div className=" my-3 text-center w-full">
          No Data Available <br /> Remove Filters or reload the web
        </div>
      )}
      <br />
      {data.length !== 0 && (
        <TablePagination
          count={pageCount}
          canNext={canNextPage}
          current={pageIndex}
          go={gotoPage}
          canBack={canPreviousPage}
        />
      )}
    </div>
  );
}
