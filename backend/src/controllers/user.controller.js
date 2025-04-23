import { asyncHandler } from '../utils/asyncHandler.js'
import { User } from '../models/user.model.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { ApiError } from '../utils/ApiError.js'


const generateAccessAndRefereshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }


    } catch (error) {
        throw new ApiError(500, "Error generating tokens")
    }
}

const register = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists - check with username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // check for user creation 
    // remove password and refresh token field from response
    // return response

    const { username, email, password } = req.body


    if (
        [username, email, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const exsistedUser = await User.findOne({ $or: [{ email }, { username }] })

    if (exsistedUser) {
        throw new ApiError(400, "User already exists")
    }
    const user = await User.create({
        username,
        email,
        password
    })

    if (!user) {
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

const loginUser = asyncHandler(async (req, res) => {

    // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie

    const { username, email, password } = req.body

    if (!username && !email) {
        throw new ApiError(400, "username or email is required")
    }

    const user = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (!user) {
        throw new ApiError(400, "User not found")
    }
    const isPasswordCorrect = await user.isPasswordCorrect(password)
    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid credentials")
    }


    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    //send cookie
    const options = {
        httpOnly: true,
        secure: true
    }
    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshtoken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, accessToken, refreshToken
                },
                "User Logged in Successfully"
            )
        )

})

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )


    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged Out"))
})

const updateUsername = asyncHandler(async (req, res) => {
    
    const { username } = req.body;

    // Check if username is already taken by someone else
    const existingUser = await User.findOne({ username });
    if (existingUser && existingUser._id.toString() !== req.params.id) {
        throw new ApiError(400, "Username already exists");
    }

    // Update the user's username
    const user = await User.findByIdAndUpdate(
        req.params.id,
        { $set: { username } },
        { new: true, validateBeforeSave: false }
    ).select("-password -refreshToken");

    if (!user) {
        throw new ApiError(400, "User not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, user, "Username updated successfully"));

})

const updateUserEmail = asyncHandler(async (req, res) => {
    const {email} = req.body

    // Check if email is already taken by someone else
    const exsistingEmail = await User.findOne({email})
    if(exsistingEmail && exsistingEmail._id.toString() !== req.params.id){
        throw new ApiError(400, "Username already exists");
    }

    const user = await User.findByIdAndUpdate(
        req.params.id,
        {
            $set:{email}
        },
        { new: true, validateBeforeSave: false }
    ).select("-password -refreshToken")

    if(!user){
        throw new ApiError(400, "User Not Found")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, user, "Email updated successfully"))
})



export {
    register,
    loginUser,
    logoutUser,
    updateUsername,
    updateUserEmail
}