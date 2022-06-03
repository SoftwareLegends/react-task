import React, { useState } from "react";
import { GoCalendar } from "react-icons/go";
import DatePicker from "react-datepicker";
import moment from "moment";

export default function DateField({ date, setDate, disable }) {
  const [openDater, setDater] = useState(false);
  return (
    <>
      <div className="mb-3 dark:text-white">Configured Date:</div>
      <div
        onClick={() => setDater(!openDater)}
        className="mb-6 transition-all hover:drop-shadow-md cursor-pointer -ml-1"
      >
        <GoCalendar
          className="text-white bg-pallate1 dark:bg-pallate2 inline w-10 h-10 rounded rounded-tr-none rounded-br-none p-2"
          style={{ transform: "translate(3px,-1.2px) scale(0.94)" }}
        />
        <div
          className={`transition-all inline-block dark:bg-darkInputBG text-black w-54 border text-base py-1.5 px-4 border-l-0 rounded-tr rounded-br  border-gray-300 ${
            disable ? "bg-gray-200 cursor-wait" : "bg-white"
          }
          ${openDater ? "border-pallate1 dark:border-pallate2" : ""}
          `}
        >
          {date ? date : "DD-MM-YYYY"}
        </div>
      </div>
      <DatePicker
        className="hidden"
        popperClassName="formd2"
        class
        open={openDater && !disable}
        value={moment(date, "DD-MM-YYYY")}
        onChange={(date) => {
          const newDate = moment(date).format("DD-MM-YYYY").toString();
          setDate(newDate);
          setDater(false);
        }}
      />
    </>
  );
}
