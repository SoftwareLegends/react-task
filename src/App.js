import React from "react";
import Navigation from "./containers/Navigation";
import Home from "./containers/Home";
import Adding from "./containers/Adding";
import { Routes, Route } from "react-router-dom";
import ContentTitle from "./components/ContentTitle";

export default function App() {
  return (
    <>
      <Navigation />
      <div className="ml-48 w-[calc(100%-12rem)] p-4">
        <ContentTitle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Adding />} />
        </Routes>
      </div>
    </>
  );
}
