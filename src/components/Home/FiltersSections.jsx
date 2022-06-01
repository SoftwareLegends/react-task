import Filters from "./Filters";
import Date from "./Date";
import Search from "./Search";
import AddSetelite from "./AddSetelite";

export default function FiltersSection() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <Filters />
        <Date />
      </div>
      <div className="flex">
        <Search />
        <AddSetelite />
      </div>
    </div>
  );
}
