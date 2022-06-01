import React, { useEffect } from "react";
import TablePagination from "./TablePagination";
import axios from "axios";

export default function Table() {
  useEffect(() => {
    axios.get("", { params: { _page: 1, _limit: 7 } }).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div>
      Table
      <TablePagination />
    </div>
  );
}
