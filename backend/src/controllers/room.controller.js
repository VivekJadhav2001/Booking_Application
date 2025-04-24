import { asyncHandler } from "../utils/asyncHandler.js";
import { Room } from "../models/room.model.js";
import { Hotel } from "../models/hotel.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createRoom = asyncHandler(async (req, res) => {

    const hotelId = req.params.hotelId
    const newRoom = new Room(req.body);

    const savedRoom = await newRoom.save()

    await Hotel.findByIdAndUpdate(hotelId,
        {
            $push: {rooms: savedRoom._id},
        }
    )

    return res.status(200).json(savedRoom)
})

const updateRoom = asyncHandler(async (req, res) => {
    const roomId = req.params.roomid;

    // First, check if the room exists
    const room = await Room.findById(roomId);
    if (!room) {
        return res.status(404).json({
            statusCode: 404,
            message: "Room not found",
            success: false
        });
    }

    // Proceed with the update if room exists
    const updatedRoom = await Room.findByIdAndUpdate(
        roomId,
        { $set: req.body }, 
        {
            new: true,
            runValidators: true,
        }
    );

    if (!updatedRoom) {
        return res.status(400).json({
            statusCode: 400,
            message: "Failed to update room",
            success: false
        });
    }

    return res.status(200).json({
        statusCode: 200,
        data: updatedRoom,
        message: "Room Updated Successfully",
        success: true
    });
});

const deleteRoom = asyncHandler(async (req, res) =>{
    const roomId = req.params.roomid

    // First, check if the room exists
    const room = await Room.findById(roomId);

    if(!room){
        return res.status(404).json(new ApiResponse(404, null, "Room not found"));
    }

    // Proceed with the deletion if room exists
    const deletedRoom = await Room.findByIdAndDelete(roomId);

    if(!deletedRoom){
        return res 
        .status(400)
        .json(new ApiResponse(400, null, "Failed to delete room"));
    }

    return res
    .status(200)
    .json(new ApiResponse(200, deletedRoom, "Room deleted successfully"));
})

const getRoom = asyncHandler(async (req, res) => {
    const roomId = req.params.roomid;

    // First, check if the room exists
    const room = await Room.findById(roomId);
    if (!room) {
        return res.status(404).json({
            statusCode: 404,
            message: "Room not found",
            success: false
        });
    }

    return res.status(200).json(new ApiResponse(200, room, "Room fetched successfully"));
})

const getAllRooms = asyncHandler(async (req, res) => {
    const rooms = await Room.find();

    if(!rooms || rooms.length === 0) {
        return res.status(404).json(new ApiResponse(404, null, "No rooms found"));
    }

    return res
    .status(200)
    .json(new ApiResponse(200, rooms, "Rooms fetched successfully"));
})

export {
    createRoom,
    updateRoom,
    deleteRoom,
    getRoom,
    getAllRooms,
}