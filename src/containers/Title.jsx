import React from "react";
import navs from "../components/Navigation/NavigationPaths.json";
import { useLocation } from "react-router-dom";
import BackButton from "../components/Title/BackButton";

export default function Title() {
  const path = useLocation().pathname;
  return (
    <div className="text-xl mb-10">
      {path !== "/" && <BackButton />}
      {navs.find((nav) => nav.path === path)?.name || ""}
    </div>
  );
}
