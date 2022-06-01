import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../data/filters";

export default function Search() {
  const text = useSelector((state) => state.filters.text);
  const dispatch = useDispatch();

  return (
    <div className="ml-3 text-white cursor-pointer transition-all hover:drop-shadow-md focus:drop-shadow-md">
      <AiOutlineSearch className="bg-pallate1 inline w-10 h-10 rounded-lg rounded-tr-none rounded-br-none p-2" />
      <input
        value={text || ""}
        onChange={(e) => {
          dispatch(setFilters({ text: e.target.value }));
        }}
        placeholder="Search..."
        className="inline-block outline-none text-black w-54 border-2 text-base py-1.5 px-4 border-l-0 rounded-tr-lg rounded-br-lg"
      />
    </div>
  );
}
