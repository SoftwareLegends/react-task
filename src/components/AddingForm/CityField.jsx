import React from "react";
import Select from "react-select";

const options = [
  { value: "Erbil", label: "Erbil" },
  { value: "Sulaymaniyah", label: "Sulaymaniyah" },
  { value: "Kirkuk", label: "Kirkuk" },
  { value: "Duhok", label: "Duhok" },
];

export default function DishesField({ disable }) {
  return (
    <>
      <div className="mt-7 mb-3">City:</div>
      <Select
        name="City"
        className="transition-all disabled:bg-gray-200 disabled:cursor-wait customSelectMe bg-white w-64 text-base mb-3"
        options={options}
        isDisabled={disable}
        isSearchable={false}
      />
    </>
  );
}
