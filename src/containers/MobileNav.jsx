import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navs from "../components/Navigation/NavigationPaths.json";
import { useDispatch, useSelector } from "react-redux";
import { setMe } from "../data/me";
import { toast } from "react-toastify";
import { setGuest } from "../data/guest";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className="transition-all lg:hidden overflow-hidden h-14 relative text-white dark:text-pallate2 bg-pallate1 dark:bg-gray-900"
      style={{
        height: open ? 270 : "",
      }}
    >
      <div
        onClick={() => setOpen(!open)}
        className="inline-block cursor-pointer absolute left-3 top-3 w-10 h-6 mr-5 translate-y-1"
      >
        <div
          className="transition-all inline-block h-1 w-full bg-white  dark:bg-pallate2 absolute top-0.5"
          style={{
            transform: open
              ? "translate(0px,8px) rotate(45deg)"
              : "translate(0px,0px) rotate(0deg)",
          }}
        />
        <div
          className="transition-all inline-block h-1 w-full bg-white  dark:bg-pallate2 absolute bottom-0.5"
          style={{
            transform: open
              ? "translate(0px,-8px) rotate(-45deg)"
              : "translate(0px,0px) rotate(0deg)",
          }}
        />
      </div>
      <div className="text-2xl py-3 text-center">Satellite Dishs</div>
      <div className="mx-5">
        {navs.map((el) => (
          <NavLink
            className={({ isActive }) =>
              `transition-all block border-2 rounded my-3 text-center py-3 ${
                isActive
                  ? "bg-white text-black dark:bg-pallate2 dark:text-white dark:border-pallate2"
                  : "dark:text-pallate2 dark:border-pallate2"
              }`
            }
            to={el.path}
            key={el.path}
          >
            {el.name}
          </NavLink>
        ))}
        <button
          onClick={() => {
            toast.info(`Bye Bye YOU ✌️`, {
              position: "bottom-center",
              autoClose: 3500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              style: { margin: 10, color: "blue" },
              theme: theme,
            });
            dispatch(setMe(""));
            dispatch(setGuest(false));
          }}
          className="w-full transition-all block border-2 rounded my-3 text-center py-3 dark:text-pallate2 dark:border-pallate2"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
