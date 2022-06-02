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
      moonColor="black"
      size={50}
      className="absolute transition-all hover:drop-shadow-md bg-white rounded-xl border-2 border-pallate1 w-10 h-10 p-1.5 right-3 top-3"
    />
  );
};

export default ThemeButton;
