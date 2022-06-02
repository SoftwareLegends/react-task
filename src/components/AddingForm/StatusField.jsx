import React from "react";

export default function StatusField({ disable }) {
  return (
    <>
      <div>Status:</div>
      <label className="text-sm ml-5 cursor-pointer">
        <input
          className="transition-all disabled:bg-gray-200 disabled:cursor-wait focus:ring-white mr-2 w-3 h-3"
          type="radio"
          disabled={disable}
          name="Status"
          defaultChecked
          value={true}
        />
        Success
      </label>
      <br />
      <label className="text-sm ml-5 cursor-pointer">
        <input
          className="transition-all disabled:bg-gray-200 disabled:cursor-wait focus:ring-white mr-2 w-3 h-3"
          type="radio"
          disabled={disable}
          name="Status"
          value={false}
        />
        Error
      </label>
    </>
  );
}
