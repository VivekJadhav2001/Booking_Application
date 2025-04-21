import {Router} from 'express'
import { deletehotel, getAllHotels, getHotelInfo, hotels, updateHotels } from '../controllers/hotel.controller.js'

const router = Router()

//create a route for hotels
router.route("/").post(hotels)

// update hotel
router.route("/:id").put(updateHotels)

// delete hotel
router.route("/:id").delete(deletehotel)

// get all hotels
router.route("/getAll").get(getAllHotels)             //here order matters in express routing, if we put getAll before the id, it will not work. So we have to put it after the id.

// get hotel by id
router.route("/:id").get(getHotelInfo)



export default router