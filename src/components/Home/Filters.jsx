import React from "react";
import { BiFilterAlt } from "react-icons/bi";
export default function Filters() {
  return (
    <button className="text-base bg-pallate1 text-white rounded-lg px-3 py-2 flex justify-center items-center transition-all hover:drop-shadow-md">
      <BiFilterAlt className="inline w-5 h-5 mr-2 " />
      Filters
    </button>
  );
}
