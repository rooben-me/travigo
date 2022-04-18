import { useState } from "react";
import { useRouter } from "next/router";

import RoomItems from "./RoomItems";

import { useSelector, useDispatch } from "react-redux";
import { Pagination, Tooltip } from "@mantine/core";

const Room = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { rooms, roomsCount, resPerPage, filteredRoomsCount } = useSelector(
    (state) => state.allRooms
  );

  const [settingLocation, setSettingLocation] = useState("");

  let { page = 1, location } = router.query;
  page = Number(page);

  const totalPage = Math.floor(roomsCount / 4);

  const handleSearch = (e) => {
    e.preventDefault();

    if (settingLocation.trim()) {
      router.push(`/?location=${settingLocation}`);
    } else {
      router.push("/");
    }
  };

  const handlePagination = (pageNumber) => {
    // window.location.href = `/?page=${pageNumber}`;
    router.push(`/?page=${pageNumber}`);
  };

  return (
    <div>
      <h1 className="mx-auto my-8 max-w-xl bg-gradient-to-r from-indigo-400 to-rose-500 bg-clip-text text-center text-2xl font-extrabold leading-snug text-transparent md:my-4 md:text-3xl lg:max-w-2xl lg:text-4xl lg:leading-snug">
        Search your Dream Vacation Spot
      </h1>
      <form
        onSubmit={handleSearch}
        className="mx-auto mb-8 flex max-w-lg items-center gap-x-4"
      >
        <input
          type="search"
          name="search"
          value={settingLocation}
          onChange={(e) => setSettingLocation(e.target.value)}
          className=" block w-full rounded-full border-slate-300 py-4 text-center shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Type Apple Valley, Buffalo"
        />
        <button
          type="submit"
          className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-4 text-base font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Search
        </button>
      </form>

      <div className="mt-4 mb-2 ml-4 flex items-center gap-x-4">
        <h2 className=" text-2xl font-medium text-slate-700">
          {location ? `Rooms in ${location}` : "All Rooms"}
        </h2>
        {location && (
          <Tooltip
            withArrow
            transition="fade"
            transitionDuration={200}
            label="Reset search and view all rooms"
          >
            <span
              className="cursor-pointer text-slate-700"
              onClick={(e) => {
                setSettingLocation("");
                handleSearch(e);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </span>
          </Tooltip>
        )}
      </div>
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rooms && rooms.length === 0
          ? "There are no Rooms available at the moment"
          : rooms &&
            rooms.map((room) => <RoomItems key={room._id} room={room} />)}
      </section>

      {resPerPage < roomsCount && (
        <div className="mt-8 flex w-full items-center justify-center">
          <Pagination
            page={page}
            onChange={handlePagination}
            size="lg"
            total={totalPage}
            withEdges
            sx={(theme) => ({
              ".mantine-Pagination-active": {
                backgroundColor: "rgb(99 102 241)",
              },
            })}
            getItemAriaLabel={(page) => {
              switch (page) {
                case "dots":
                  return "dots element aria-label";
                case "prev":
                  return "previous page button aria-label";
                case "next":
                  return "next page button aria-label";
                case "first":
                  return "first page button aria-label";
                case "last":
                  return "last page button aria-label";
                default:
                  return `${page} item aria-label`;
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Room;
