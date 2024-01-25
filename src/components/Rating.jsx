import star from "../assets/star.svg";

export default function Rating({ rating }) {
  const ratingFillNumber = Math.trunc(rating);
  const ratingArray = Array.from({ length: ratingFillNumber });
  return (
    <div className="flex items-center space-x-1">
      {ratingArray.map((_, index) => (
        <img src={star} key={index} />
      ))}
      <span className="text-xs lg:text-sm">({rating} Star)</span>
    </div>
  );
}
