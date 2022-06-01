import ReactPaginate from "react-paginate";

const nextandprev =
  "text-pallate1 py-0.2 w-8 rounded transition-all hover:drop-shadow-md cursor-pointer border-pallate1 border bg-white text-center leading-tight";

export default function PaginatedItems({
  canNext = true,
  canBack = true,
  current = 0,
  count = 1,
  go = () => {},
}) {
  const changed = ({ selected }) => go(selected);

  return (
    <>
      <ReactPaginate
        breakLabel={<span className="text text-pagnumbers1">...</span>}
        nextLabel=">"
        onPageChange={changed}
        pageCount={count}
        forcePage={current}
        containerClassName="flex gap-1 text-pagnumbers1 float-right mb-5"
        pageClassName="py-0.2 w-8 align-center text-center rounded transition-all hover:drop-shadow-md cursor-pointer hover:border-pallate1 border border-white"
        activeClassName="bg-pallate1 transition-all hover:drop-shadow-md text-white"
        previousClassName={`${nextandprev} ${!canBack ? "hidden" : ""}`}
        nextClassName={`${nextandprev} ${!canNext ? "hidden" : ""}`}
        pageRangeDisplayed={3}
        previousLabel="<"
        renderOnZeroPageCount={<div>slaw</div>}
      />
    </>
  );
}
