import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { allRooms, newRoom } from "../../../controllers/roomController";

import onError from "../../../middlewares/errors";

const handler = nc({ onError });

dbConnect();

handler.get(allRooms);

handler.post(newRoom);

export default handler;
