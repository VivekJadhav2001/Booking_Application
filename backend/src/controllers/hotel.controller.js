import {asyncHandler} from '../utils/asyncHandler.js'
import {Hotel} from '../models/hotel.model.js'
import {ApiResponse} from '../utils/ApiResponse.js'


//Save a new hotel  
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

//Update a hotel
const updateHotels = asyncHandler(async(req,res)=>{
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})

    //{$set:req.body} is used to update the hotel with the new data
    //{new:true} is used to return the updated hotel, because by default it returns the old hotel.

    return res
    .status(200)
    .json(new ApiResponse(200,updatedHotel))
})

//Delete a hotel
const deletehotel = asyncHandler(async(req,res) => {
    await Hotel.findByIdAndDelete(req.params.id)

    return res
    .status(200)
    .json(new ApiResponse(200,{},"Hotel deleted successfully"))
})
//Get a hotel by id
const getHotelInfo = asyncHandler(async(req,res) => {
    const hotel = await Hotel.findById(req.params.id)

    return res
    .status(200)
    .json(new ApiResponse(200,hotel))

})
//Get All hotels
const getAllHotels = asyncHandler(async(req,res) =>{
    const hotels = await Hotel.find()

    return res.status(200)
    .json(new ApiResponse(200, hotels))

})

//count by city
const countByCity = asyncHandler(async(req,res) =>{
    const cities = req.query.cities.split(",")
    const list = await Promise.all(cities.map(city => {
        return Hotel.countDocuments({city:city})
    }))


    return res.status(200).json({ success: true, data: list });



})

// const countByType = asyncHandler(async(req,res) =>{
//     const types = await Hotel.aggregate([
//         {
//             $group: {
//                 _id: "$type",
//                 count: { $sum: 1 },
//             },
//         },
//     ])

//     return res.status(200)
//     .json(new ApiResponse(200, types))

// })


export {
    hotels,
    updateHotels,
    deletehotel,
    getHotelInfo,
    getAllHotels,
    countByCity,
    // countByType
}