import NavigationTitle from "../components/Navigation/NavigationTitle";
import NavigationButton from "../components/Navigation/NavigationButton";
import navigation_items from "../components/Navigation/NavigationPaths.json";

export default function Navigation() {
  return (
    <>
      <nav className="min-h-screen bg-pallate1 w-48 fixed">
        <NavigationTitle />
        {navigation_items.map((nav) => (
          <NavigationButton key={nav.name} name={nav.name} path={nav.path} />
        ))}
      </nav>
    </>
  );
}
