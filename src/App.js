import React from "react";
import Navigation from "./containers/Navigation";
import Home from "./containers/Home";
import Adding from "./containers/Adding";
import { Routes, Route } from "react-router-dom";
import Title from "./containers/Title";
import E404 from "./components/E404";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeTotalData } from "./data/TotalData";

export default function App() {
  axios.defaults.baseURL = "http://localhost:3000/data";

  const dispatch = useDispatch();

  axios.interceptors.response.use((res) => {
    // in case requested with out pagination there will be no x-total-count
    try {
      dispatch(changeTotalData(res.headers["x-total-count"]));
    } catch (error) {}
    return res;
  }, undefined);

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
