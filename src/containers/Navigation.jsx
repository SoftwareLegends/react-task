import NavigationTitle from "../components/navigation/NavigationTitle";
import NavigationButton from "../components/navigation/NavigationButton";
import navigation_items from "../components/navigation/NavigationPaths.json";

export default function Navigation() {
  return (
    <>
      <nav className="min-h-screen bg-pallate1 w-40 fixed ">
        <NavigationTitle />
        {navigation_items.map((nav) => (
          <NavigationButton key={nav.name} name={nav.name} path={nav.path} />
        ))}
      </nav>
    </>
  );
}
