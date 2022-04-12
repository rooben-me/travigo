import React from "react";
import Image from "next/image";

const RoomItems = ({ room }) => {
  const { name, pricePerNight, images, address, ratings, numOfReviews } = room;

  return (
    <div>
      <div className="relative aspect-video overflow-hidden rounded-2xl md:aspect-square">
        <Image
          layout="fill"
          objectFit="cover"
          loading="lazy"
          src={images[0].url}
        />
        <span className="absolute right-3 top-3 rounded-xl bg-white px-3 py-1.5 text-xl font-semibold text-rose-500">
          ${pricePerNight} / night
        </span>
      </div>
      <p className="mt-4 text-lg font-semibold leading-9 text-slate-800 line-clamp-2 md:mt-6 md:text-xl lg:text-2xl">
        {name}
      </p>
      <p className="mt-2 mb-4 truncate text-sm text-slate-700 md:text-lg">
        {address}
      </p>

      <div className="flex items-center gap-4 font-medium">
        <div className="items-centerg flex gap-2 rounded-full bg-[#FCF7E5] px-3 py-1.5">
          <Image src="/static/images/star.svg" width={20} height={20} />
          <p className="text-md text-slate-700 ">{ratings || "0.0"}</p>
        </div>
        <p className="text-slate-700">({numOfReviews} reviews)</p>
      </div>
    </div>
  );
};

export default RoomItems;
