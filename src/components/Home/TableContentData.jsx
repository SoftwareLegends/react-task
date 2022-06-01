import DishBadge from "./DishBadge";

const TableContentData = (cell) => {
  switch (cell.column.id) {
    case "satelliteDishes":
      return <DishBadge badges={cell.value} />;
    case "address":
      return (
        <span>
          <span>Longitude: {cell.value.longitude}</span>
          <br />
          <span>Latitude: {cell.value.latitude}</span>
        </span>
      );
    case "status":
      return (
        <span
          className={`text-white rounded inline-block w-20 text-center ${
            cell.value ? "bg-green" : "bg-red"
          }`}
        >
          {cell.value ? "Success" : "Error"}
        </span>
      );

    default:
      return cell.render("Cell");
  }
};

export default TableContentData;
