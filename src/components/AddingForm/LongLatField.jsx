import React from "react";

export default function LongLatField({ disable }) {
  return (
    <>
      <div className="mt-6">Adresses:</div>
      <div className="pl-6 pt-3">
        <div className="mb-1 text-sm">Longitude:</div>
        <input
          disabled={disable}
          name="Longitude"
          type="number"
          className="transition-all disabled:bg-gray-200 disabled:cursor-wait w-64 rounded text-xs mb-3 border-gray-300"
        />
        <div className="mb-1 text-sm">Latitude:</div>
        <input
          disabled={disable}
          name="Latitude"
          type="number"
          className="transition-all disabled:bg-gray-200 disabled:cursor-wait w-64 rounded text-xs mb-7 border-gray-300"
        />
      </div>
    </>
  );
}
