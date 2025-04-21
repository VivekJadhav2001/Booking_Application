import {Router} from 'express'
import { deletehotel, hotels, updateHotels } from '../controllers/hotel.controller.js'

const router = Router()

//create a route for hotels
router.route("/").post(hotels)

// update hotel
router.route("/:id").put(updateHotels)

// delete hotel
router.route("/:id").delete(deletehotel)

export default router