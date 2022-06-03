import React from "react";

export default function NameField({ disable }) {
  return (
    <>
      <div className="mb-3 dark:text-white">Name:</div>
      <input
        name="Name"
        type="text"
        disabled={disable}
        className="transition-all dark:bg-darkInputBG focus:border-pallate1 focus:ring-pallate1 dark:focus:border-pallate2 dark:focus:ring-pallate2 disabled:bg-gray-200 disabled:cursor-wait rounded text-sm mb-5 w-96 border-gray-300"
      />
    </>
  );
}
