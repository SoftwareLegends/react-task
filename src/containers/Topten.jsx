import moment from "moment";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

export default function AddingForm() {
  const data = useSelector((state) => state.data);

  const topN = (arr, n) => {
    if (n > arr.length) {
      return false;
    }
    return arr
      .slice()
      .sort((a, b) => {
        return (
          moment(b.configuredAt, "DD-MM-YYYY").valueOf() -
          moment(a.configuredAt, "DD-MM-YYYY").valueOf()
        );
      })
      .slice(0, n);
  };
  const top = useMemo(() => topN(data, 10) || [], [data]);

  return (
    <div className=" w-full md:w-1/2 pr-2">
      <div className="text mb-2 dark:text-white">Lattest 10 Satellites</div>
      <hr className="border-pallate1 dark:border-pallate2" />
      {top.map((el) => (
        <div
          key={el.id}
          className="bg-topSat1 dark:bg-pallate3 my-4 rounded py-4 px-5 flex flex-wrap justify-between items-center cursor-pointer transition-all hover:drop-shadow-md"
        >
          <div>{el.name}</div>
          <div className="flex flex-wrap">
            <div className="bg-topCreator1 border-black border rounded w-32 text-center text-sm">
              {el.createdBy}
            </div>
            <div className="ml-2 text-xs translate-y-0.5 text-semiBlack">
              {el.configuredAt}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
