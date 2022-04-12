const Room = require("../models/room");
const rooms = require("../data/rooms.json");

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/travigo")
  .then((con) => console.log("connected to local database"));

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");

    await Room.insertMany(rooms);
    console.log("All rooms are inserted");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
