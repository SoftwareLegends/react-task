import TablePagination from "./TablePagination";
import { useTable } from "react-table";
import TableContentData from "./TableContentData";
import { ContentClasses, TitleClasses } from "./TableClassServices";
import { useSelector } from "react-redux";
import { COLUMNS } from "./columns.js";
import { useMemo } from "react";

export default function Table() {
  const DATA = useSelector((state) => state.data);
  const filters = useSelector((state) => state.filters);
  const columns = useMemo(() => COLUMNS, []);

  const data = useMemo(() => {
    return DATA.filter(
      (el) =>
        el.name.toLowerCase().includes(filters.text.toLowerCase()) ||
        el.createdBy.toLowerCase().includes(filters.text.toLowerCase())
    );
  }, [filters]);

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div>
      <table className="mt-6 w-full border-separate" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, idx) => (
                <th
                  className={`text-base font-normal bg-customtableheading1 border border-semiBlack first:rounded-tl-lg last:rounded-tr-lg 
                  ${TitleClasses(column.id)} 
                  ${idx === 0 ? "" : "border-l-0"}
                  `}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, idx) => {
                  return (
                    <td
                      className={`p-3 align-top border border-t-0 text-base font-normal border-semiBlack 
                      ${ContentClasses(cell.column.id)} 
                      ${
                        index === data.length - 1
                          ? "first:rounded-bl-lg last:rounded-br-lg"
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
      {data.length !== 0 && <TablePagination />}
    </div>
  );
}
