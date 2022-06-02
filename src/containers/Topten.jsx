import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

const arr = [
  { id: 0, start: 0, duration: 117, slide: 4, view: 0 },
  { id: 0, start: 0, duration: 12, slide: 1, view: 0 },
  { id: 0, start: 0, duration: 41, slide: 2, view: 0 },
  { id: 0, start: 0, duration: 29, slide: 3, view: 0 },
  { id: 0, start: 0, duration: 123, slide: 3, view: 0 },
  { id: 0, start: 0, duration: 417, slide: 2, view: 0 },
  { id: 0, start: 0, duration: 12, slide: 1, view: 0 },
  { id: 0, start: 0, duration: 67, slide: 2, view: 0 },
];

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
  const top = useMemo(() => topN(data, 10), [data]);

  return (
    <div className="w-1/2 bg-red">
      <div className="mb-4">Name:</div>
    </div>
  );
}
