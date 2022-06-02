import React from "react";
import { Link } from "react-router-dom";

export default function AddSetelite() {
  return (
    <Link
      to="/add"
      className="ml-3 transition-all hover:drop-shadow-md bg-pallate1 rounded-lg text-white px-10 align-bottom flex items-center justify-center"
    >
      Add Satellite
    </Link>
  );
}
