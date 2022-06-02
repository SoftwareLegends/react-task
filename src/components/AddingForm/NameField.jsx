import React from "react";

export default function NameField({ disable }) {
  return (
    <>
      <div className="mb-3">Name:</div>
      <input
        name="Name"
        type="text"
        disabled={disable}
        className="transition-all disabled:bg-gray-200 disabled:cursor-wait rounded text-sm mb-5 w-96 border-gray-300"
      />
    </>
  );
}
