import { useNavigate } from "react-router-dom";

import backicon from "../../assets/backicon.svg";

const BackButton = ({ text }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/", { replace: true });
      }}
      className="bg-pallate1 px-5 py-3 mr-2 rounded text-white hover:scale-105 transition-all ease-in-out"
    >
      {text ? (
        text
      ) : (
        <img src={backicon} alt="icon for going to previus page in history." />
      )}
    </button>
  );
};

export default BackButton;
