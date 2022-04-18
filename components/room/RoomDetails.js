import Link from "next/link";
import Image from "next/image";

import { useSelector } from "react-redux";

import { Spoiler } from "@mantine/core";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const RoomDetails = () => {
  const { room } = useSelector((state) => state.roomDetails);

  return (
    <div>
      <Link href="/">
        <a className="inline-flex items-center gap-x-1 p-4 text-xl text-indigo-500 hover:text-indigo-400 active:text-indigo-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>

          <span>Go back</span>
        </a>
      </Link>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="bordertext-center my-8 flex items-center justify-center rounded-2xl shadow-xl"
      >
        {room?.images.map(({ public_id, url, _id }) => (
          <SwiperSlide key={_id}>
            <div>
              <Image
                alt="star icon"
                src={url}
                layout="responsive"
                height={14}
                width={40}
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex flex-col justify-between md:flex-row">
        <div className="flex flex-col">
          <h1 className=" max-w-lg text-3xl font-bold leading-relaxed text-slate-700">
            {room?.name}
          </h1>
          <p className="mt-2 text-lg text-slate-600">{room?.address}</p>
        </div>

        <div className="flex flex-col md:items-end">
          <div className="my-8 flex items-center gap-4 font-medium">
            <div className="flex items-center gap-2 rounded-full bg-[#FCF7E5] px-3 py-1.5">
              <Image
                alt="star icon"
                src="/static/images/star.svg"
                width={20}
                height={20}
                layout="fixed"
              />
              <p className="text-md text-slate-700 ">
                {room?.ratings || "0.0"}
              </p>
            </div>
            <p className="text-slate-700">({room?.numOfReviews} reviews)</p>
          </div>
          <div className="text-4xl font-bold text-rose-500 md:mt-auto">
            ${room?.pricePerNight}
            <span className="text-lg text-slate-600"> / per Night</span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex max-w-2xl flex-col gap-2">
        <h2 className="text-xl font-medium text-slate-700">Description</h2>
        <Spoiler
          maxHeight={80}
          showLabel="Show more"
          hideLabel="Hide"
          sx={() => ({
            ".mantine-1uyej08": {
              color: "rgb(99 102 241)",
            },
          })}
        >
          <p className="leading-relaxed text-slate-600">{room?.description}</p>
        </Spoiler>
      </div>
    </div>
  );
};

export default RoomDetails;
