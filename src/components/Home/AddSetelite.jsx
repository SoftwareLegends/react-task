import React from "react";
import { Link } from "react-router-dom";

export default function AddSetelite() {
  return (
    <Link
      to="/add"
      className="ml-3 h-10 transition-all shadow hover:drop-shadow-md hover:shadow-gray-400 dark:shadow-none dark:border-0 bg-pallate1 dark:bg-pallate2 rounded text-white px-10 align-bottom flex items-center justify-center"
    >
      Add Satellite
    </Link>
  );
}
