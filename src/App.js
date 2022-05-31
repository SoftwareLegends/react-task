import React from "react";
import Navigation from "./containers/Navigation";
import Home from "./containers/Home";
import Adding from "./containers/Adding";

export default function App() {
  return (
    <>
      <Navigation />
      <div className="ml-40 w-[calc(100%-10rem)] p-5 pt-6">
        <Home />
        <Adding />
      </div>
    </>
  );
}
