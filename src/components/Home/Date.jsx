import React from "react";
import { GoCalendar } from "react-icons/go";

export default function Date() {
  return (
    <div className="ml-3 text-white cursor-pointer transition-all hover:drop-shadow-md focus:drop-shadow-md">
      <GoCalendar className="bg-pallate1 inline w-10 h-10 rounded-lg rounded-tr-none rounded-br-none p-2" />
      <div className="inline-block text-black w-54 border-2 text-base py-1.5 px-4 border-l-0 rounded-tr-lg rounded-br-lg bg-white">
        28-5-2000 - 3-2-1948
      </div>
    </div>
  );
}
