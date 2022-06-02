import NavigationTitle from "../components/Navigation/NavigationTitle";
import NavigationButton from "../components/Navigation/NavigationButton";
import navigation_items from "../components/Navigation/NavigationPaths.json";
import { useDispatch } from "react-redux";
import { setMe } from "../data/me";
import { toast } from "react-toastify";
import { setGuest } from "../data/guest";

export default function Navigation() {
  const dispatch = useDispatch();
  return (
    <>
      <nav className="min-h-screen bg-pallate1 w-48 fixed">
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
              theme: "light",
            });
            dispatch(setMe(""));
            dispatch(setGuest(false));
          }}
          className="mx-4 w-40 text-left my-2 px-3 py-2 block rounded cursor-pointer transition-all hover:scale-105 text-white hover:border hover:bg-hover hover:border-none"
        >
          Sign out
        </button>
      </nav>
    </>
  );
}
