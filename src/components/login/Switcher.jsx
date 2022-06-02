import React from "react";

export default function Switcher({ login, setLogin }) {
  return (
    <>
      <div className="relative mb-5 flex text-lg justify-between bg-pallate1 py-3 rounded">
        <div className="w-1/2 text-center">
          <span
            onClick={() => setLogin(true)}
            className="transition-all cursor-pointer relative z-10 px-2 py-1"
            style={{ color: login ? "" : "white" }}
          >
            Sign in
          </span>
        </div>
        <div onClick={() => setLogin(false)} className="w-1/2 text-center">
          <span
            className="transition-all cursor-pointer relative z-10 px-2 py-1"
            style={{ color: login ? "white" : "" }}
          >
            Sign up
          </span>
        </div>
        <span
          className="absolute shadow-md drop-shadow-md transition-all h-10 top-1.5 bg-white w-32 inline-block py-1 rounded left-4"
          style={{ left: login ? "" : "11.2rem" }}
        />
      </div>
    </>
  );
}
