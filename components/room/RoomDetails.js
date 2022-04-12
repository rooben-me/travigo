import Link from "next/link";
import React from "react";

import { useSelector } from "react-redux";

const RoomDetails = () => {
  const { room } = useSelector((state) => state.roomDetails);

  console.log(room);

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
    </div>
  );
};

export default RoomDetails;
