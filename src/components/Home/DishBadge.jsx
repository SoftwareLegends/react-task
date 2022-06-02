const DishBadge = ({ badges = [], custom = false, Do = (inx) => {} }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((dish, idx) => (
        <span
          className={`text-center border text-sm w-24 bg-dishpalate1 border-semiBlack rounded py-1 ${
            custom ? "cursor-alias" : ""
          }`}
          onClick={() => {
            if (custom) {
              Do(idx);
            }
          }}
          key={custom ? dish.value : dish}
        >
          {custom ? dish.value : dish}
        </span>
      ))}
    </div>
  );
};

export default DishBadge;
