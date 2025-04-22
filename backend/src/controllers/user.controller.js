import {asyncHandler} from '../utils/asyncHandler.js'
import {User} from '../models/user.model.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import {ApiError} from '../utils/ApiError.js'


const register = asyncHandler(async(req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists - check with username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // check for user creation 
    // remove password and refresh token field from response
    // return response

    const {username, email, password} = req.body
    
    
    if (
        [username, email, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const exsistedUser = await User.findOne({$or: [{email}, {username}]})

    if(exsistedUser) {
        throw new ApiError(400, "User already exists")
    }
    const user = await User.create({
        username,
        email,
        password
    })

    if(!user){
        throw new ApiError(500, "User not created")
    }
    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    return res
    .status(201)
    .json(
        new ApiResponse(201, "User created successfully", createdUser,
        )
    )
})

const loginUser = asyncHandler(async(req,res)=>{

    // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie


    const {email, username, password} = req.body

    if(!(username || email)){
        throw new ApiError(400, "Username or email is required")
    }

    const user = await User.findOne({
        $or:[
            {email},
            {username}
        ]
    })

    if(!user){
        throw new ApiError(400, "User not found")
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password)

    if(!isPasswordCorrect){
        throw new ApiError(400, "Invalid credentials")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, "User logged in successfully", user))


})

export {
    register,
    loginUser
}