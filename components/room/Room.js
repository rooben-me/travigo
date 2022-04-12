import React from "react";

import RoomItems from "./RoomItems";

const Room = ({ rooms }) => {
  return (
    <div>
      <h1 className="mb-16 mt-8 max-w-xl bg-gradient-to-r from-indigo-400 to-rose-500 bg-clip-text text-5xl font-extrabold leading-snug text-transparent lg:max-w-2xl lg:text-6xl lg:leading-snug">
        Enjoy your Dream Vacation
      </h1>
      <section className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rooms && rooms.length === 0
          ? "There are no Rooms available at the moment"
          : rooms.map((room) => <RoomItems key={room._id} room={room} />)}
      </section>
    </div>
  );
};

export default Room;
