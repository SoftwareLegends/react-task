import React, { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../data/filters";
import Selecting from "./Selecting";

const ButtonsStyle =
  "inline-block transition-all translate-y-0.5 w-3 h-3 rounded-full mr-1.5";
export default function Filters() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const changeState = (state) => {
    dispatch(setFilters({ status: state }));
  };
  return (
    <>
      <button
        onClick={() => setModal(true)}
        className="text-base bg-pallate1 dark:bg-pallate2 text-white rounded-lg px-3 py-2 flex justify-center items-center transition-all shadow hover:drop-shadow-md hover:shadow-gray-400 dark:shadow-none dark:border-0"
      >
        <BiFilterAlt className="inline w-5 h-5 mr-2 " />
        Filters
      </button>
      <div
        className={`transition-all w-72 z-50 fixed bg-white dark:bg-gray-900 dark:shadow-gray-900 dark:border-2 dark:border-pallate2 rounded translate-y-12 ${
          modal ? "inline-block" : "hidden"
        }`}
      >
        <div className="py-4 px-6 dark:text-white">
          <div>
            <label className="text-base">Created By:</label>
            <Selecting target="createdBy" />
          </div>
          <div className="mt-4">
            <label className="text-base">Satellite Dishes:</label>
            <Selecting target="satelliteDishes" />
          </div>
          <div className="mt-4">
            <label className="text-base">Status</label>
            <div className="flex flex-wrap mt-1">
              <label
                onClick={() => {
                  if (filters.status) changeState(undefined);
                }}
                className="text-xs mr-5 cursor-pointer"
              >
                <div
                  className={`${ButtonsStyle} ${
                    !filters.status
                      ? "border-[calc(3px)] border-pallate1 dark:border-pallate2"
                      : "bg-radioNone dark:bg-gray-300"
                  }`}
                />
                Both
              </label>
              <label
                onClick={() => {
                  if (filters.status !== "yes") changeState("yes");
                }}
                className="text-xs mr-5 cursor-pointer"
              >
                <div
                  className={`${ButtonsStyle} ${
                    filters.status === "yes"
                      ? "border-[calc(3px)] border-pallate1 dark:border-pallate2"
                      : "bg-radioNone dark:bg-gray-300"
                  }`}
                />
                Success
              </label>
              <label
                onClick={() => {
                  if (filters.status !== "no") changeState("no");
                }}
                className="text-xs cursor-pointer"
              >
                <div
                  className={`${ButtonsStyle} ${
                    filters.status === "no"
                      ? "border-[calc(3px)] border-pallate1 dark:border-pallate2"
                      : "bg-radioNone dark:bg-gray-300"
                  }`}
                />
                Fail
              </label>
            </div>
          </div>
          <div className="mt-4">
            <label className="text-base">City:</label>
            <Selecting target="city" />
          </div>
        </div>
        <hr className="border-pallate1 dark:border-pallate2 mt-2 mb-4" />
        <div className="flex justify-between pb-3 px-3">
          <button
            onClick={() => {
              dispatch(
                setFilters({
                  status: undefined,
                  city: undefined,
                  createdBy: undefined,
                  satelliteDishes: undefined,
                })
              );
            }}
            className="text-base bg-white dark:bg-gray-900 transition-all shadow hover:drop-shadow-md hover:shadow-gray-400 dark:shadow-none
            text-red border-2 py-1 px-4 rounded border-red"
          >
            Reset
          </button>
          <button
            onClick={() => setModal(false)}
            className="text-base  transition-all shadow hover:drop-shadow-md hover:shadow-gray-400 dark:shadow-none dark:border-0
            text-white bg-pallate1 dark:bg-pallate2 py-1 px-4 rounded "
          >
            Close
          </button>
        </div>
      </div>
      <div
        onClick={() => setModal(false)}
        className={`transition-all z-40 bg-black opacity-30 w-screen h-screen  left-0 top-0 ${
          modal ? "fixed" : "hidden"
        }`}
      ></div>
    </>
  );
}
