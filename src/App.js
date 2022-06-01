import React, { useEffect } from "react";
import Navigation from "./containers/Navigation";
import Home from "./containers/Home";
import Adding from "./containers/Adding";
import { Routes, Route } from "react-router-dom";
import Title from "./containers/Title";
import E404 from "./components/E404";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData } from "./data/data";

export default function App() {
  axios.defaults.baseURL = "http://localhost:3000/data";
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("")
      .then((res) => {
        dispatch(setData(res.data));
        return res;
      })
      .catch((err) => console.log(err));
  }, []);

  window.ya = (s) => s;
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
