import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useSelector, useDispatch } from "react-redux";
import { changeTheming } from "../../data/theme";

const ThemeButton = () => {
  const isDark = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <DarkModeSwitch
      checked={isDark === "dark"}
      onChange={() => dispatch(changeTheming())}
      sunColor="white"
      moonColor="black"
      className="bg-pallate1 rounded-xl w-10 h-10 p-2 float-right"
    />
  );
};

export default ThemeButton;
