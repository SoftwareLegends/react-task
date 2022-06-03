import React from "react";
import DishBadge from "./DishBadge";

export default function DataModal({ watch, setWatch }) {
  return (
    <div
      className="fixed w-screen h-screen bg-black bg-opacity-40 backdrop-blur-sm justify-center items-center top-0 left-0 z-30"
      style={{
        display: watch.name ? "flex" : "none",
      }}
    >
      {watch.name ? (
        <div className="p-2 bg-white dark:bg-bgall2 rounded w-96 text-sm">
          <div className="text-2xl dark:text-pallate2 text-pallate1">
            Data of id: {watch.id}
          </div>
          <hr className="border-pallate1 dark:border-pallate2 mb-2" />
          <div className="mt-1 text-black dark:text-white">
            <div>Name</div>
            <div className="h-12 dark:bg-gray-700 dark:border-pallate2 rounded flex items-center pl-2 border-2 border-pallate1">
              {watch.name}
            </div>
          </div>
          <div className="mt-1 text-black dark:text-white">
            <div>Configured At</div>
            <div className="h-12 dark:bg-gray-700 dark:border-pallate2 rounded flex items-center pl-2 border-2 border-pallate1">
              {watch.configuredAt}
            </div>
          </div>
          <div className="mt-1 text-black dark:text-white">
            <div>Created By</div>
            <div className="h-12 dark:bg-gray-700 dark:border-pallate2 rounded flex items-center pl-2 border-2 border-pallate1">
              {watch.createdBy}
            </div>
          </div>
          <div className="mt-1 text-black dark:text-white">
            <div>
              Status:{" "}
              <span style={{ color: watch.status ? "green" : "red" }}>
                {watch.status ? "Success" : "Error"}
              </span>
            </div>
          </div>
          <div className="mt-1 text-black dark:text-white">
            <div className="mb-1">Satellite Dishes</div>
            <DishBadge badges={watch.satelliteDishes} />
          </div>
          <div className="mt-1 text-black dark:text-white">
            <div>Longitude</div>
            <div className="h-12 dark:bg-gray-700 dark:border-pallate2 rounded flex items-center pl-2 border-2 border-pallate1">
              {watch.address.longitude}
            </div>
          </div>
          <div className="mt-1 text-black dark:text-white">
            <div>Latitude</div>
            <div className="h-12 dark:bg-gray-700 dark:border-pallate2 rounded flex items-center pl-2 border-2 border-pallate1">
              {watch.address.latitude}
            </div>
          </div>
          <div className="mt-1 text-black dark:text-white">
            <div>City</div>
            <div className="h-12 dark:bg-gray-700 dark:border-pallate2 rounded flex items-center pl-2 border-2 border-pallate1">
              {watch.city}
            </div>
          </div>
          <button
            onClick={() => setWatch(false)}
            className="mt-3 dark:bg-pallate2 px-3 py-1 bg-pallate1 rounded text-white transition-all shadow hover:drop-shadow-md hover:shadow-gray-400 dark:shadow-none dark:border-0"
          >
            Close
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
