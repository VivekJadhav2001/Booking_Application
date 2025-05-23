import mongoose, { Schema } from "mongoose"

const hotelSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    type:{                              //Type of hotel villa, singleroom, guestHouse and etc
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    distance:{
        type: String,
        required: true
    },
    photos:{
        type: [String],
    },
    title:{                          
        type: String,
        required: true
    },
    desc:{                          //description
        type: String,
        required: true
    },
    rating:{
        type:Number,
        min:0,
        max:5,
    },
    rooms:{
        type: [{
            type: Schema.Types.ObjectId,
            ref:"Room"
        }],
    },
    cheapestPrice:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    }
    

},{timestamps:true})

export const Hotel = mongoose.model("Hotel",hotelSchema)