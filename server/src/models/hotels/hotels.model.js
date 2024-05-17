import hotels from './hotels.mongo.js';
import multer from 'multer';
import fs from 'fs';

const getLatestId = async () => {
    const latestId = await hotels.findOne().sort('-id');
    if (!latestId) {
        return 1;
    }
    return latestId.id + 1;
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage
})

// const addNewHotel = async (hotelData, picData) => {
const addNewHotel = async (hotelData) => {
    try {
        const id = await getLatestId();

        if ((await hotels.find({
                name: hotelData.name,
                country: hotelData.country,
                city: hotelData.city
            })).length > 0) {
            return {
                status: false,
                message: "Hotel already exists!"
            }
        } else {
            try {
                await hotels.create({
                    id,
                    // image: {
                    //     data: fs.readFileSync('uploads/' + picData.filename),
                    //     contentType: "image/png"
                    // },
                    ...hotelData
                })

                return {
                    status: true,
                    message: "Hotel created successfully!"
                }
            } catch (err) {
                return {
                    status: false,
                    message: "Hotel could not be created, please try again!"
                }
            }
        }
    } catch (err) {
        return {
            status: false,
            message: "Hotel could not be created, please try again!"
        }
    }
}

const getAllHotels = async () => {
    try {
        const result = await hotels.find();
        return {
            result,
            status: true
        }
    }
    catch(err) {
        return {
            status: false
        }
    }
}

const getHotelById = async (id) => {
    try {
        const result = await hotels.findOne({id});

        if(result) {
            return {
                result,
                status: true
            }
        }
        else {
            return {
                status: false
            }
        }
    }
    catch(err) {
        return {
            status: false
        }
    }
}

const deleteHotelById = async (id) => {
    try {
        const result = await hotels.deleteOne({id});

        if(result.deletedCount === 1) {
            return {
                message: "Hotel Deleted Successfully!",
                status: true
            }
        }
        else {
            return {
                message: "Hotel Not Found!",
                status: true
            }
        }
    }
    catch(err) {
        return {
            status: false
        }
    }
}

const editHotelById = async (id, hotelData) => {
    try {
        const hotel = await hotels.findOne({id});

        if(hotel) {
            await hotels.updateOne({id}, {
                id,
                ...hotelData
            })
            return {
                status: true,
                message: "Hotel updated successfully!"
            }
        }
        else {
            return {
                status: false,
                message: "Hotel Not Found!"
            }
        }
    }
    catch(err) {
        return {
            status: false,
            message: "Hotel not updated, Please try again later!"
        }
    }
}

export {
    addNewHotel,
    upload,
    getAllHotels,
    getHotelById,
    deleteHotelById,
    editHotelById
}