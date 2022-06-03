import React from "react";

export default function LongLatField({ disable }) {
  return (
    <>
      <div className="mt-6 dark:text-white">Adresses:</div>
      <div className="pl-6 pt-3">
        <div className="mb-1 text-sm dark:text-white">Longitude:</div>
        <input
          disabled={disable}
          name="Longitude"
          type="number"
          step="any"
          className="transition-all disabled:bg-gray-200 disabled:cursor-wait dark:bg-darkInputBG w-64 rounded text-xs mb-3 border-gray-300 focus:border-pallate1 focus:ring-pallate1 dark:focus:border-pallate2 dark:focus:ring-pallate2"
        />
        <div className="mb-1 text-sm dark:text-white">Latitude:</div>
        <input
          disabled={disable}
          name="Latitude"
          type="number"
          step="any"
          className="transition-all disabled:bg-gray-200 border-gray-300 dark:bg-darkInputBG disabled:cursor-wait w-64 rounded text-xs mb-7 focus:border-pallate1 focus:ring-pallate1 dark:focus:border-pallate2 dark:focus:ring-pallate2"
        />
      </div>
    </>
  );
}
