import React from "react";
import Star from "@/public/svg/star.svg";
import Image from "next/image";

const Rating = ({ value }) => {
  const stars = Array(Math.round(value)).fill(Star);
  return (
    <>
      {stars.map((item, i) => (
        <Image
          key={i}
          src={Star}
          width={20}
          height={20}
          className="w-5"
          alt="star"
        />
      ))}
    </>
  );
};

export default Rating;
