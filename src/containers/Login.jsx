import React, { useState } from "react";
import Switcher from "../components/login/Switcher";
import loginLight from "../assets/loginlight.svg";
import createLight from "../assets/createlight.svg";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setMe } from "../data/me";
import { setGuest } from "../data/guest";

export default function LoginContainer() {
  const [login, setLogin] = useState(true);
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();

  const resetWithMessage = (type, message, e) => {
    setTimeout(() => {
      setDisable(false);
      toast[type](message, {
        position: "bottom-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: { margin: 10 },
        theme: "light",
      });
      try {
        e.target.reset();
      } catch (error) {}
    }, 1700);
  };
  const submit = (e) => {
    e.preventDefault();
    setDisable(true);
    const form = new FormData(e.target);
    let err = 0;

    const name = form.get("name");
    if (!name || name.length < 3) {
      err = 1;
      resetWithMessage("error", "Name must be 3 character or more.");
    }

    if (name === "Guest") {
      err = 1;
      resetWithMessage("error", "Name Guest is not allowed.");
    }

    const password = form.get("password");

    if (!password || password.length < 8) {
      resetWithMessage("error", "Password must be 8 character or more.");
      err = 1;
    }

    if (!err) {
      if (login) {
        axios
          .get("/users", { params: { name, password } })
          .then((res) => {
            if (res.data.length === 0) {
              resetWithMessage("error", "User Not Found.");
            } else {
              resetWithMessage("success", `Welcome mr/mrs.${name}.`, e);

              setTimeout(() => {
                dispatch(setMe(res.data[0].name));
              }, 1700);
            }
          })
          .catch(() => {
            resetWithMessage("error", "Server Error.");
          });
      } else {
        axios
          .get("/users", { params: { name } })
          .then((res) => {
            if (res.data.length !== 0) {
              resetWithMessage("warning", "User name already used.");
            } else {
              axios
                .post("/users", { name, password })
                .then(() => {
                  resetWithMessage("success", "Account created.", e);
                  setTimeout(() => {
                    setLogin(true);
                  }, 1700);
                })
                .catch(() => {
                  resetWithMessage("error", "Server Error.");
                });
            }
          })
          .catch((err) => {
            resetWithMessage("error", "Server Error.");
          });
      }
    }
  };

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
        <form onSubmit={submit}>
          <div className="text-lg">User name</div>
          <input
            disabled={disable}
            className="rounded disabled:bg-gray-200 focus:ring-pallate1 focus:border-pallate1 w-full transition-all hover:drop-shadow-md hover:shadow-md border-gray-200 border-2"
            type="text"
            name="name"
            placeholder="Type your user name"
          />
          <div className="text-lg mt-5">Password</div>
          <input
            className="rounded disabled:bg-gray-200 focus:ring-pallate1 focus:border-pallate1 w-full transition-all hover:drop-shadow-md hover:shadow-md border-gray-200 border-2"
            type="password"
            name="password"
            disabled={disable}
            placeholder="Type your user name"
          />
          <div className="mt-5 flex flex-col justify-center items-center overflow-hidden">
            <div className="relative w-28 h-10 mb-2">
              <button
                disabled={disable}
                type="submit"
                className="absolute disabled:bg-gray-300 origin-center w-28 left-0 transition-all hover:drop-shadow-md hover:shadow-md bg-pallate1 py-2 px-5 text-white rounded"
                style={{ left: login ? "" : "24rem" }}
              >
                Log in
              </button>
              <button
                disabled={disable}
                type="submit"
                className="absolute disabled:bg-gray-300 origin-center w-28 left-0 transition-all hover:drop-shadow-md hover:shadow-md bg-pallate1 py-2 px-5 text-white rounded"
                style={{ left: login ? "24rem" : "" }}
              >
                Create
              </button>
            </div>
            <button
              disabled={disable}
              type="button"
              onClick={() => {
                dispatch(setGuest(true));
              }}
              className="mt-1 disabled:text-black text-pallate1 px-2 py-1"
            >
              I'm a Guest
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
