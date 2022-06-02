import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useSelector, useDispatch } from "react-redux";
import { changeTheming } from "../data/theme";

const ThemeButton = () => {
  const isDark = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <DarkModeSwitch
      checked={isDark === "dark"}
      onChange={() => dispatch(changeTheming())}
      sunColor="#54BAB9"
      moonColor="#5902EC"
      size={50}
      className="border-none lg:bg-none bg-white dark:lg:bg-bgall2 dark:bg-gray-900 absolute z-20 transition-all hover:drop-shadow-md rounded-full border-2 w-10 h-10 p-1.5 right-4 top-2 lg:top-3"
    />
  );
};

export default ThemeButton;
