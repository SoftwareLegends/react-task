import React, { useState } from "react";
import { GoCalendar } from "react-icons/go";
import { AiOutlineClear } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { setFilters } from "../../data/filters";

export default function DateFilter() {
  const [counter, setCounter] = useState(0);
  const filters = useSelector((state) => state.filters);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div
        onClick={() => {
          if (counter % 2 !== 0) {
            setCounter(counter + 1);
            dispatch(setFilters({ startDate: undefined, endDate: undefined }));
          }
          setOpen(!open);
        }}
        className="ml-3 text-white cursor-pointer transition-all hover:drop-shadow-md focus:drop-shadow-md z-30"
      >
        {open ? (
          <AiOutlineClear
            onClick={() => {
              if (counter % 2 !== 0) {
                setCounter(counter + 1);
              }
              dispatch(
                setFilters({ startDate: undefined, endDate: undefined })
              );
              setOpen(false);
            }}
            className="bg-pallate1 dark:bg-pallate2 inline w-10 h-10 rounded-lg rounded-tr-none rounded-br-none p-2 z-50"
          />
        ) : (
          <GoCalendar className="bg-pallate1 dark:bg-pallate2 inline w-10 h-10 rounded-lg rounded-tr-none rounded-br-none p-2" />
        )}
        <div className="inline-block text-black dark:bg-gray-200 w-54 border-2 text-base py-1.5 px-4 border-l-0 rounded-tr-lg rounded-br-lg z-10 bg-white">
          {filters.startDate || "DD-MM-YYYY"} -{" "}
          {filters.endDate || "DD-MM-YYYY"}
        </div>
      </div>
      <DatePicker
        popperClassName="formd1"
        className="hidden"
        open={open}
        onChange={(date) => {
          if (counter % 2 !== 0) {
            setOpen(false);
            dispatch(
              setFilters({ endDate: moment(date).format("DD-MM-YYYY") })
            );
          } else {
            dispatch(
              setFilters({ startDate: moment(date).format("DD-MM-YYYY") })
            );
          }
          setCounter(counter + 1);
        }}
      >
        <span className="absolute left-1/2 -translate-x-1/2 text-lg pt-1">
          {counter % 2 === 0 ? "Start Date" : "End Date"}
        </span>
      </DatePicker>
    </>
  );
}
