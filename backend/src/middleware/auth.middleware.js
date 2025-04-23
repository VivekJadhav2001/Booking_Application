import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "")
    
        if(!token){
            throw new ApiError(401, "Unauthorized request")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!user){
            throw new ApiError(401, "Unauthorized request")
        }
        req.user = user
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")    
    }


})


export const verifyUser = (req, res, next) => {
    verifyJWT(req, res, next, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            return res.status(403).json({
                message: "You are not allowed to perform this action"
            })
        }
    })
}

export const verifyAdmin = (req, res, next) =>{
    verifyJWT(req,res,next, () =>{
        if(req.user.isAdmin){
            next()
        }else{
            return res.status(403).json({
                message: "You are not allowed to perform this action"
            })
        }
    })
}