import {Router} from 'express'
import { hotels } from '../controllers/hotel.controller.js'

const router = Router()


router.route("/").post(hotels)

export default router