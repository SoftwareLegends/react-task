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
  axios.defaults.baseURL = "http://127.0.0.1:3000";

  axios.interceptors.response.use((res) => {
    console.log(res);
    return res;
  }, undefined);

  const dispatch = useDispatch();

  dispatch(changeTotalData(20));

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
