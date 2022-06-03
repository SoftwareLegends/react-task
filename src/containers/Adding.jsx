import React from "react";
import AddingForm from "../containers/AddingForm";
import Topten from "./Topten";
export default function Adding() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-0">
      <AddingForm />
      <Topten />
    </div>
  );
}
