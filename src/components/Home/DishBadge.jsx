const DishBadge = ({ badges = [] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((dish) => (
        <span
          className="text-center border text-sm w-24 bg-dishpalate1 border-semiBlack rounded py-1"
          key={dish}
        >
          {dish}
        </span>
      ))}
    </div>
  );
};

export default DishBadge;
