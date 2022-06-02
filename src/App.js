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
import ThemeButton from "./components/ThemeButton";
import { ToastContainer } from "react-toastify";

export default function App() {
  // the second ones are online versions

  axios.defaults.baseURL = "http://localhost:3000/data";
  // axios.defaults.baseURL = "https://api.jsonbin.io/b/6297dcc0402a5b3802190021";
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("")
      .then((res) => {
        dispatch(setData(res.data));
        // dispatch(setData(res.data.data));
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ToastContainer />
      <Navigation />
      <ThemeButton />
      <div className="ml-52 w-[calc(100%-13rem)] min-h-screen p-4">
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
