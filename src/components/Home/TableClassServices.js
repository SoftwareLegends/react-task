export const TitleClasses = (target) => {
  switch (target) {
    case "configuredAt":
      return "text-center w-36 hidden xl:table-cell";

    case "city":
      return "text-left pl-3 hidden sm:table-cell";

    case "name":
      return "text-left pl-3 border-l sm:border-l-0";
    case "id":
      return "w-10 hidden sm:table-cell";

    case "address":
      return "text-left pl-3 hidden lg:table-cell";

    case "status":
      return "w-24";

    case "satelliteDishes":
      return "text-left pl-3 w-60 ";

    case "createdBy":
      return "w-64 pl-3 text-left hidden xl:table-cell";

    default:
      return "";
  }
};

export const ContentClasses = (target) => {
  if (target === "id") {
    return "text-center hidden sm:table-cell";
  } else if (target === "status") {
    return "sm:p-3 p-0.5 text-xs sm:text-base";
  } else if (target === "city") {
    return "hidden sm:table-cell sm:border-l-0 hidden ";
  } else if (target === "name") {
    return "border-l sm:border-l-0 sm:p-3 p-0.5 text-xs sm:text-base";
  } else if (target === "address") {
    return "hidden lg:table-cell";
  } else if (target === "createdBy") {
    return "hidden xl:table-cell";
  } else if (target === "configuredAt") {
    return "text-center hidden xl:table-cell";
  } else if (target === "satelliteDishes") {
    return "justify-center border-l sm:table-cell sm:p-3 p-0.5 text-xs sm:text-base";
  } else {
    return "";
  }
};
