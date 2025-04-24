import {Router} from 'express'
import { loginUser, logoutUser, register, updateUserEmail, updateUsername, deleteUser, getUser, getAllUsers } from '../controllers/user.controller.js'
import { verifyAdmin, verifyJWT, verifyUser } from '../middleware/auth.middleware.js'

const router = Router()


router.route('/register').post(register)
router.route('/login').post(loginUser)
router.route("/logout").post(verifyJWT,logoutUser)

router.route("/username/:id").put(verifyUser, updateUsername)
router.route("/email/:id").put(verifyUser, updateUserEmail)
router.route("/deleteUser/:id").delete(verifyUser, deleteUser)
router.route("/userDetails/:id").get(verifyUser, getUser)             //here order matters in express routing, if we put getAll before the id, it will not work. So we have to put it after the id.
router.route("/allUsersDetails").get(verifyAdmin, getAllUsers)             //here order matters in express routing, if we put getAll before the id, it will not work. So we have to put it after the id.
export default router