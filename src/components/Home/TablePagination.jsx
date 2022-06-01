import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setFilter } from "../../data/filters";

const nextandprev =
  "text-pallate1 py-0.2 w-8 rounded transition-all hover:drop-shadow-md cursor-pointer border-pallate1 border bg-white text-center leading-tight";

export default function PaginatedItems() {
  const setParams = useSearchParams()[1];
  const Totapages = useSelector((state) => Math.ceil(state.data.length / 7));
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  let query = filters.page - 1;

  const changed = ({ selected }) => {
    setParams({ page: selected + 1 });
    dispatch(setFilter({ page: selected + 1 }));
  };

  return (
    <>
      <ReactPaginate
        breakLabel={<span className="text text-pagnumbers1">...</span>}
        nextLabel=">"
        onPageChange={changed}
        pageCount={Totapages}
        initialPage={query}
        containerClassName="flex gap-1 text-pagnumbers1 float-right mb-5"
        pageClassName="py-0.2 w-8 align-center text-center rounded transition-all hover:drop-shadow-md cursor-pointer hover:border-pallate1 border border-white"
        activeClassName="bg-pallate1 transition-all hover:drop-shadow-md text-white"
        previousClassName={`${nextandprev} ${
          filters.page === 1 ? "hidden" : ""
        }`}
        nextClassName={`${nextandprev} ${
          filters.page === Totapages ? "hidden" : ""
        }`}
        pageRangeDisplayed={3}
        previousLabel="<"
        renderOnZeroPageCount={<div>slaw</div>}
      />
    </>
  );
}
