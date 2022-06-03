import NavigationTitle from "../components/navigation/NavigationTitle.jsx";
import NavigationButton from "../components/navigation/NavigationButton";
import navigation_items from "../components/navigation/NavigationPaths.json";
import { useDispatch, useSelector } from "react-redux";
import { setMe } from "../data/me";
import { toast } from "react-toastify";
import { setGuest } from "../data/guest";

export default function Navigation() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  return (
    <>
      <nav className="min-h-screen bg-pallate1 hidden lg:block dark:bg-gray-900 w-48 fixed">
        <NavigationTitle />
        {navigation_items.map((nav) => (
          <NavigationButton key={nav.name} name={nav.name} path={nav.path} />
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
          className="dark:hover:bg-pallate2 dark:hover:text-white dark:text-pallate2 mx-4 w-40 text-left my-2 px-3 py-2 block rounded cursor-pointer transition-all hover:scale-105 text-white hover:border hover:bg-hover hover:border-none"
        >
          Sign out
        </button>
      </nav>
    </>
  );
}
