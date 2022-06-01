import { useSelector } from "react-redux";

const TablePagination = () => {
  const TotalData = useSelector((state) => state.TotalData);
  return TotalData;
};

export default TablePagination;
