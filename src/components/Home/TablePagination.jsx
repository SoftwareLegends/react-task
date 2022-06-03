import ReactPaginate from "react-paginate";

const nextandprev =
  "text-pallate1 py-0.2 pb-0.5 dark:bg-pallate2 dark:text-white w-8 inline-block mx-1 rounded transition-all shadow hover:drop-shadow-md hover:shadow-gray-400 dark:shadow-none dark:border-0 cursor-pointer border-pallate1 border bg-white text-center leading-tight";

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
        breakLabel={
          <span className="text text-pagnumbers1 mx-2 dark:text-white">
            ...
          </span>
        }
        nextLabel=">"
        onPageChange={changed}
        pageCount={count}
        forcePage={current}
        containerClassName="text-pagnumbers1 mb-1 tablepag1 text-right pr-2"
        pageClassName="inline-block mx-1 py-0.2 w-8 dark:text-white align-center text-center rounded transition-all shadow hover:drop-shadow-md hover:shadow-gray-400 dark:shadow-none dark:border-0 cursor-pointer hover:border-pallate1 border border-white"
        activeClassName="bg-pallate1 dark:bg-pallate2 transition-all shadow hover:drop-shadow-md hover:shadow-gray-400 dark:shadow-none dark:border-0 text-white"
        previousClassName={`${nextandprev} ${!canBack ? "hidden" : ""}`}
        nextClassName={`${nextandprev} ${!canNext ? "hidden" : ""}`}
        pageRangeDisplayed={1}
        marginPagesDisplayed={3}
        previousLabel="<"
        renderOnZeroPageCount={<div>slaw</div>}
      />
    </>
  );
}
