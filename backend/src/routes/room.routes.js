import { Router } from "express";
import { verifyAdmin, verifyUser } from "../middleware/auth.middleware.js";
import { createRoom, updateRoom, deleteRoom, getRoom, getAllRooms } from "../controllers/room.controller.js";


const router = Router()

router.route("/:hotelid").post(verifyAdmin,createRoom)
router.route("/:roomid").put(verifyAdmin,updateRoom)
router.route("/:roomid").delete(verifyAdmin,deleteRoom)
router.route("/getAll").get(verifyUser,getAllRooms)
router.route("/:roomid").get(verifyUser,getRoom)


export default router