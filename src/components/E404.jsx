import React from "react";
import ErrorDog from "../assets/ErrorDog.svg";
import BackButton from "./Title/BackButton";

const E404 = () => (
  <div className="flex flex-col min-h-full justify-center items-center">
    <img src={ErrorDog} alt="connection error" style={{ width: 400 }} />
    <h2 className="mb-2 dark:text-white">Sorry this page not exists</h2>
    <BackButton text="Back to home" />
  </div>
);

export default E404;
