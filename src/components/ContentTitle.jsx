import { useLocation, useNavigate } from "react-router-dom";
import navs from "./navigation/NavigationPaths.json";
import backicon from "../assets/backicon.svg";

const ContentTitle = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <div className="text-xl mb-4">
      {path !== "/" && (
        <button
          onClick={() => {
            navigate("/", { replace: true });
          }}
          className="bg-pallate1 px-5 py-3 mr-2 rounded text-white hover:scale-105 transition-all ease-in-out"
        >
          <img
            src={backicon}
            alt="icon for going to previus page in history."
          />
        </button>
      )}
      {navs.find((nav) => nav.path === path).name || ""}
    </div>
  );
};

export default ContentTitle;
