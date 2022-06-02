import React from "react";
import FiltersSection from "../components/Home/FiltersSections";
import Table from "../components/Home/Table";

export default function Home() {
  return (
    <div className="text-xl">
      <FiltersSection />
      <Table />
    </div>
  );
}
