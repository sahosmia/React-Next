"use client";
import Image from "next/image";

import React, { useState } from "react";

const ThumbnailImage = ({ images, thumbnail }) => {
  const [thumbnailPhoto, setThumbnailPhoto] = useState(thumbnail);

  return (
    <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
      <Image
        src={thumbnailPhoto}
        className="w-[400px] h-[500px] mx-auto object-cover"
        alt="product image"
        width={500}
        height={360}
      />

      <div className="flex gap-4 mt-4">
        {images.map((item, i) => (
          <Image
            onClick={() => setThumbnailPhoto(item)}
            key={i}
            src={item}
            className="w-[100px] h-[100px] mx-auto border object-cover"
            alt="product image"
            width={500}
            height={360}
          />
        ))}
      </div>
    </div>
  );
};

export default ThumbnailImage;
