interface RatingCirclesProps {
  rating: number;
}

export default function RatingCircles({ rating }: RatingCirclesProps) {
  return (
    <div className="flex items-center gap-1.5 mt-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = rating >= i + 1;
        const half = rating >= i + 0.5 && rating < i + 1;

        return (
          <div
            key={i}
            className={`w-[15px] h-[15px] rounded-full border ${
              filled
                ? "bg-darkbrown border-darkbrown"
                : half
                ? "bg-gradient-to-r from-darkbrown from-50% to-transparent to-50% border-darkbrown"
                : "border-[#5C4033] bg-transparent"
            }`}
          />
        );
      })}
      <span className="text-xs text-darkbrown pl-1.5">
        {rating.toFixed(1)} / 5
      </span>
    </div>
  );
}
