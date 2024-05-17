import mongoose from 'mongoose';

const bookingsSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
    customerContactNumber: {
        type: String,
        required: true
    },
    hotelName: {
        type: String,
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
    arrivalTime: {
        type: String,
        required: true
    },
    bookingStatus: {
        type: Boolean,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    roomNumber: {
        type: Number,
        required: true
    }
})

export default mongoose.model('booking', bookingsSchema);