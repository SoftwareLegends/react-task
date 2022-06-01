import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { setFilters } from "../../data/filters";

const Selecting = ({ target }) => {
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    let temp = [];
    temp.push({ label: "All", value: "" });
    if (target === "satelliteDishes") {
      data.forEach((eel) => {
        eel[target].forEach((el) => {
          if (temp.find((ell) => ell.value === el) === undefined) {
            temp.push({ value: el, label: el });
          }
        });
      });
    } else {
      data.forEach((el) => {
        if (temp.find((ell) => ell.value === el[target]) === undefined) {
          temp.push({ value: el[target], label: el[target] });
        }
      });
    }

    setOptions(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <Select
      className="customSelectMe bg-white mt-2 text-base"
      onChange={(v) => dispatch(setFilters({ [target]: v.value }))}
      options={options}
      value={
        filters[target]
          ? { label: filters[target], value: filters[target] }
          : { label: "All", value: "" }
      }
      isSearchable={false}
    />
  );
};

export default Selecting;
