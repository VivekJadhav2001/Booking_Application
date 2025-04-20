import {asyncHandler} from '../utils/asyncHandler.js'
import {Hotel} from '../models/hotel.model.js'
import {ApiResponse} from '../utils/ApiResponse.js'

const hotels = asyncHandler(async (req,res) =>{
    
    try {
        const newHotel = new Hotel(req.body)    //taking new hotel information
    
        const savedHotel = await newHotel.save()
        return res
        .status(200)
        .json(new ApiResponse(200,savedHotel,))
    } catch (error) {
        res.status(500).json(error)
    }
})


export {
    hotels
}