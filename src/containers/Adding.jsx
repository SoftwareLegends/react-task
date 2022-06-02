import React from "react";
import AddingForm from "../containers/AddingForm";
import Topten from "./Topten";
export default function Adding() {
  return (
    <div className="flex">
      <AddingForm />
      <Topten />
    </div>
  );
}
