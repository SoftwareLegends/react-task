import React, { useState } from "react";
import { GoCalendar } from "react-icons/go";
import DatePicker from "react-datepicker";
import moment from "moment";

export default function DateField({ date, setDate, disable }) {
  const [openDater, setDater] = useState(false);
  return (
    <>
      <div className="mb-3">Configured Date:</div>
      <div
        onClick={() => setDater(!openDater)}
        className="mb-6 transition-all hover:drop-shadow-md cursor-pointer -ml-1"
      >
        <GoCalendar
          className="text-white bg-pallate1 inline w-10 h-10 rounded rounded-tr-none rounded-br-none p-2"
          style={{ transform: "translate(3px,-1.2px) scale(0.94)" }}
        />
        <div
          className={`transition-all inline-block text-black w-54 border text-base py-1.5 px-4 border-l-0 rounded-tr rounded-br  border-gray-300 ${
            disable ? "bg-gray-200 cursor-wait" : "bg-white"
          }`}
        >
          {date ? date : "DD-MM-YYYY"}
        </div>
      </div>
      <DatePicker
        className="hidden"
        popperClassName="formd2"
        open={openDater && !disable}
        value={moment(date, "DD-MM-YYYY")}
        onChange={(date) => {
          const newDate = moment(date).format("DD-MM-YYYY").toString();
          setDate(newDate);
          console.log(newDate);
          setDater(false);
        }}
      />
    </>
  );
}
