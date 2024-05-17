import mongoose from 'mongoose';

const contactUsSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    problem: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    resolved: {
        type: Boolean,
        required: true
    }
});

export default mongoose.model('contactUs', contactUsSchema);