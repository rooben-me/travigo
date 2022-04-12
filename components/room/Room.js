import { useState } from "react";
import Router, { useRouter } from "next/router";

import RoomItems from "./RoomItems";

import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "@mantine/core";

const Room = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { rooms, roomsCount, resPerPage, filteredRoomsCount } = useSelector(
    (state) => state.allRooms
  );

  const [location, setLocation] = useState("");

  let { page = 1 } = router.query;
  page = Number(page);

  const totalPage = Math.floor(roomsCount / 4);

  const handleSearch = (e) => {
    e.preventDefault();

    if (location.trim()) {
      router.push(`/?location=${location}`);
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
      <h1 className="mx-auto my-8 max-w-xl bg-gradient-to-r from-indigo-400 to-rose-500 bg-clip-text text-center text-5xl font-extrabold leading-snug text-transparent md:my-4 lg:max-w-2xl lg:text-4xl lg:leading-snug">
        Search your Dream Vacation Spot
      </h1>
      <form
        onSubmit={handleSearch}
        className="mx-auto mb-8 flex max-w-lg items-center gap-x-4"
      >
        <input
          type="search"
          name="search"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
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
          />
        </div>
      )}
    </div>
  );
};

export default Room;
