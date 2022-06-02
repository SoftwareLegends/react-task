import React, { useState } from "react";
import NameField from "../components/AddingForm/NameField";
import DateField from "../components/AddingForm/DateField";
import DishesField from "../components/AddingForm/DishesField";
import LongLatField from "../components/AddingForm/LongLatField";
import StatusField from "../components/AddingForm/StatusField";
import CityField from "../components/AddingForm/CityField";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";

export default function AddingForm() {
  const [date, setDate] = useState("");
  const [selected, setSelected] = useState([]);
  const [disable, setD] = useState(false);
  // const me = useSelector((state) => state.me);
  const submiting = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const easyFields = ["Name", "Latitude", "Longitude", "Status", "City"];
    setD(true);
    setTimeout(() => {
      setD(false);
    }, 3500);

    let err = 0;

    if (!date || date === "DD-MM-YYYY" || date === "") {
      err = 1;
      toast.error(`Please Enter a Date`, {
        position: "bottom-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }

    if (selected.length === 0) {
      err = 1;
      toast.error(`Please Select a Dish`, {
        position: "bottom-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }

    easyFields.forEach((el, idx) => {
      [err, easyFields[idx]] = validate(form, el, err);
    });
    if (!err) {
      const tempDishes = [];
      selected.forEach((el) => tempDishes.push(el.value));
      const prepareData = {
        name: easyFields[0],
        configuredAt: date,
        createdBy: "kodo",
        satelliteDishes: tempDishes,
        address: {
          longitude: easyFields[2],
          latitude: easyFields[1],
        },
        status: easyFields[3] === "true",
        city: easyFields[4],
      };

      axios
        .post("/data", prepareData)
        .then(() => {
          toast.success(`Sattelite added successfully`, {
            position: "bottom-center",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          reset(false);
          window.fetchData();
        })
        .catch((err) => console.log(err));
    }
  };

  const validate = (form, name, old) => {
    let temp = 0;
    const val = form.get(name);
    if (!val || val.length < 4) {
      toast.error(`Please Enter Field ${name}`, {
        position: "bottom-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      temp = 1;
    }
    return [Math.max(old, temp), val];
  };

  const reset = (toasting = true) => {
    document.getElementById("addFormS").reset();
    window.clearCity();
    window.clearDishes();
    setDate("");
    setSelected([]);
    if (toasting)
      toast.success("Form Reseted", {
        position: "bottom-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
  };
  return (
    <div className="w-1/2">
      <form name="addSatellite" id="addFormS" onSubmit={submiting}>
        <NameField disable={disable} />
        <DateField disable={disable} date={date} setDate={setDate} />
        <DishesField
          disable={disable}
          selected={selected}
          setSelected={setSelected}
        />
        <LongLatField disable={disable} />
        <StatusField disable={disable} />
        <CityField disable={disable} />
        <div className="mt-5 flex justify-between mr-5">
          <button
            disabled={disable}
            onClick={reset}
            type="reset"
            className="border border-pallate1 px-4 py-1 rounded text-pallate1 bg-white transition-all hover:drop-shadow-md disabled:bg-gray-300 disabled:text-white disabled:border-none"
          >
            Reset
          </button>
          <button
            disabled={disable}
            type="submit"
            className="px-4 py-1 rounded text-white bg-pallate1 transition-all hover:drop-shadow-md disabled:bg-gray-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
