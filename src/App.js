import React, { useEffect } from "react";
import Navigation from "./containers/Navigation";
import Home from "./containers/Home";
import Adding from "./containers/Adding";
import { Routes, Route } from "react-router-dom";
import Title from "./containers/Title";
import E404 from "./components/E404";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./data/data";
import ThemeButton from "./components/ThemeButton";
import { ToastContainer } from "react-toastify";
import Login from "./containers/Login";
import MobileNav from "./containers/MobileNav";

export default function App() {
  // the second ones are online versions
  const me = useSelector((state) => state.me);
  const guest = useSelector((state) => state.guest);
  const theme = useSelector((state) => state.theme);

  axios.defaults.baseURL = "http://localhost:3000/";
  // axios.defaults.baseURL = "https://api.jsonbin.io/b/6297dcc0402a5b3802190021";
  const dispatch = useDispatch();

  const fetchData = () => {
    axios
      .get("/data")
      .then((res) => {
        dispatch(setData(res.data));
        // dispatch(setData(res.data.data));
      })
      .catch((err) => console.log(err));
  };

  window.fetchData = fetchData;

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={theme}>
      <div className="bg-white dark:bg-bgall2">
        <ToastContainer />
        <ThemeButton />
        {me || guest ? (
          <React.Fragment>
            <Navigation />
            <MobileNav />
            <div className="ml-0 lg:ml-52 w-full lg:w-[calc(100%-13rem)] min-h-screen p-4">
              <Title />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Adding />} />
                <Route path="*" element={<E404 />} />
              </Routes>
            </div>
          </React.Fragment>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}
