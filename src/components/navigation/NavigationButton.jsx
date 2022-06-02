import { NavLink } from "react-router-dom";

const NavigationButton = ({ name = "temp", path }) => (
  <NavLink
    to={path ? path : `${name}`}
    activestyle={{
      fontWeight: "bold",
      color: "red",
    }}
    className={({ isActive }) =>
      `mx-4 my-2 px-3 py-2 block rounded cursor-pointer transition-all hover:scale-105 ${
        isActive
          ? "text-active bg-white dark:bg-pallate2 dark:text-white"
          : "text-white dark:text-pallate2 hover:border hover:bg-hover hover:border-none dark:hover:bg-pallate2 dark:hover:text-white"
      }`
    }
  >
    {name}
  </NavLink>
);

export default NavigationButton;
