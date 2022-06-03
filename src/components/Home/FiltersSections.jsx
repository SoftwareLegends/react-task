import Filters from "./Filters";
import Date from "./Date";
import Search from "./Search";
import AddSetelite from "./AddSetelite";

export default function FiltersSection() {
  return (
    <div className="pr-2 xl:flex xl:flex-wrap block xl:gap-2 justify-between form1d1a1">
      <div className="flex justify-center sm:justify-between flex-wrap gap-2">
        <Filters />
        <Date />
      </div>
      <div className="flex justify-center sm:justify-between flex-wrap gap-2 mt-3 xl:mt-0">
        <Search />
        <AddSetelite />
      </div>
    </div>
  );
}
