import ReactPaginate from "react-paginate";

const nextandprev =
  "text-pallate1 py-0.2 w-8 rounded transition-all hover:drop-shadow-md cursor-pointer border-pallate1 border bg-white text-center leading-tight";

export default function PaginatedItems() {
  const changed = ({ selected }) => {};

  return (
    <>
      <ReactPaginate
        breakLabel={<span className="text text-pagnumbers1">...</span>}
        nextLabel=">"
        onPageChange={changed}
        pageCount={1}
        initialPage={15}
        containerClassName="flex gap-1 text-pagnumbers1 float-right mb-5"
        pageClassName="py-0.2 w-8 align-center text-center rounded transition-all hover:drop-shadow-md cursor-pointer hover:border-pallate1 border border-white"
        activeClassName="bg-pallate1 transition-all hover:drop-shadow-md text-white"
        previousClassName={nextandprev}
        nextClassName={nextandprev}
        pageRangeDisplayed={3}
        previousLabel="<"
        renderOnZeroPageCount={<div>slaw</div>}
      />
    </>
  );
}
