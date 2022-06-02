import React, { useState } from "react";
import Switcher from "../components/login/Switcher";
import loginLight from "../assets/loginlight.svg";
import createLight from "../assets/createlight.svg";

export default function LoginContainer() {
  const [login, setLogin] = useState(true);
  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
      <div className="bg-white w-96 px-7 py-4 rounded drop-shadow-md shadow-gray-400 shadow border border-l-gray-100">
        <Switcher login={login} setLogin={setLogin} />
        <div className="mb-5 transition-all h-72 relative overflow-hidden">
          <img
            src={loginLight}
            className="drop-shadow-md transition-all left-0 h-72 w-full absolute"
            alt="svg for log in"
            style={{ left: login ? "" : "24rem" }}
          />
          <img
            src={createLight}
            className="drop-shadow-md transition-all left-0 h-72 w-full absolute"
            alt="svg for creating account"
            style={{ left: login ? "24rem" : "" }}
          />
        </div>
        <form>
          <div className="text-lg">User name</div>
          <input
            className="rounded focus:ring-pallate1 focus:border-pallate1 w-full transition-all hover:drop-shadow-md hover:shadow-md border-gray-200 border-2"
            type="text"
            name="User-name"
            placeholder="Type your user name"
          />
          <div className="text-lg mt-5">Password</div>
          <input
            className="rounded focus:ring-pallate1 focus:border-pallate1 w-full transition-all hover:drop-shadow-md hover:shadow-md border-gray-200 border-2"
            type="password"
            name="Password"
            placeholder="Type your user name"
          />
          <div className="mt-5 flex justify-center overflow-hidden">
            <div className="relative w-28 h-10">
              <button
                type="submit"
                className="absolute origin-center w-28 left-0 transition-all hover:drop-shadow-md shadow-md bg-pallate1 py-2 px-5 text-white rounded"
                style={{ left: login ? "" : "24rem" }}
              >
                Log in
              </button>
              <button
                type="submit"
                className="absolute origin-center w-28 left-0 transition-all hover:drop-shadow-md shadow-md bg-pallate1 py-2 px-5 text-white rounded"
                style={{ left: login ? "24rem" : "" }}
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
