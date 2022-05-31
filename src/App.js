import React from "react";
import Navigation from "./containers/Navigation";
import Home from "./containers/Home";
import Adding from "./containers/Adding";
import { Routes, Route } from "react-router-dom";
import Title from "./containers/Title";
import E404 from "./components/E404";

export default function App() {
  return (
    <>
      <Navigation />
      <div className="ml-48 w-[calc(100%-12rem)] min-h-screen p-4">
        <Title />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Adding />} />
          <Route path="*" element={<E404 />} />
        </Routes>
      </div>
    </>
  );
}
