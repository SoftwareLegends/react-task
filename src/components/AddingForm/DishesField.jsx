import React, { useState } from "react";
import Select from "react-select";
import DishBadge from "../Home/DishBadge";

const option = [
  { value: "Dish 300", label: "Dish 300" },
  { value: "Dish 500", label: "Dish 500" },
  { value: "Dish 1000", label: "Dish 1000" },
  { value: "Super Dish", label: "Super Dish" },
];

export default function DishesField({ selected, setSelected, disable }) {
  const [options, setOptions] = useState(option);

  window.clearDishes = () => {
    setOptions(option);
  };
  return (
    <>
      <div className="mt-7 mb-3">Satellite Dishes:</div>
      <Select
        className="transition-all disabled:bg-gray-200 disabled:cursor-wait customSelectMe bg-white w-64 text-base mb-3"
        onChange={(v) => {
          let temp1 = [...selected];
          let temp2 = [...options];
          const idx = temp2.findIndex((el) => el.value === v.value);
          temp2.splice(idx, 1);
          temp1.push(v);
          setOptions(temp2);
          setSelected(temp1);
        }}
        options={options}
        isDisabled={selected.length === option.length || disable}
        value={{
          value: "",
          label:
            selected.length !== option.length
              ? `Selected Dishes ${selected.length}`
              : "All dishes selected",
        }}
        isSearchable={false}
      />
      <DishBadge
        Do={(idx) => {
          if (disable) return;
          let temp1 = [...selected];
          let temp2 = [...options];

          temp2.push(temp1[idx]);
          temp1.splice(idx, 1);

          setSelected(temp1);
          setOptions(temp2);
        }}
        badges={selected}
        custom={true}
      />
    </>
  );
}
