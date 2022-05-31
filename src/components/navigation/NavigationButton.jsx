const NavigationButton = ({ name = "temp", path }) => (
  <div className="bg-white text-black mx-4 my-2 px-3 py-2 rounded cursor-pointer">
    {name}
  </div>
);

export default NavigationButton;
