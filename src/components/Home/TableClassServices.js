export const TitleClasses = (target) => {
  if (target === "city" || target === "address" || target === "name") {
    return "text-left pl-3";
  }

  switch (target) {
    case "configuredAt":
      return "text-center w-36";

    case "id":
      return "w-10";

    case "status":
      return "w-24";

    case "satelliteDishes":
      return "text-left pl-3 w-60";

    case "createdBy":
      return "w-64 pl-3 text-left";

    default:
      return "";
  }
};

export const ContentClasses = (target) => {
  if (target === "id" || target === "configuredAt") {
    return "text-center";
  } else if (target === "satelliteDishes") {
    return "justify-center";
  } else {
    return "";
  }
};
