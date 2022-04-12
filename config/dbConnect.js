const mongoose = require("mongoose");

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose
    .connect(process.env.DB_LOCAL_URI)
    .then((con) => console.log("connected to local database"));
};

export default dbConnect;
