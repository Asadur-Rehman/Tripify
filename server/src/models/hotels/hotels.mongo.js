import mongoose from "mongoose";

const hotelsSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    }, 
    image: {
        type: String,
        required: true
        // data: Buffer,
        // contentType: String
    },
    name: {
        type: String,
        required: true
    },
    numberOfRooms: {
        type: Number,
        required: true
    },
    numberOfAvailableRooms: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

export default mongoose.model('hotel', hotelsSchema);