import bookings from './bookings.mongo.js';
import hotels from '../hotels/hotels.mongo.js';

const getLatestId = async () => {
    const latestBooking = await bookings.findOne().sort('-id');
    if (!latestBooking) {
        return 1;
    }
    return latestBooking.id + 1;
}

const addNewBooking = async (bookingData) => {
    try {
        const id = await getLatestId();

        if ((await bookings.find({
                customerEmail: bookingData.customerEmail,
                country: bookingData.country,
                city: bookingData.city,
                hotelName: bookingData.hotelName,
                roomNumber: bookingData.roomNumber
            })).length > 0) {
            return {
                status: false,
                message: "This room is already booked by you!"
            }
        }
        else if ((await bookings.find({
                hotelName: bookingData.hotelName,
                country: bookingData.country,
                city: bookingData.city,
                roomNumber: bookingData.roomNumber
            })).length > 0) {
            return {
                status: false,
                message: "This hotel room is already in use by someone else!"
            }
        } 
        else {
            try {
                const result = await bookings.create({
                    id,
                    bookingStatus: false,
                    ...bookingData
                });

                const hotelToUpdate = await hotels.findOne({
                    name: result.hotelName,
                    country: result.country,
                    city: result.city
                });
                
                const resultHotelUpdate = await hotels.updateOne({
                    name: result.hotelName,
                    country: result.country,
                    city: result.city
                }, {
                    numberOfRooms: +hotelToUpdate.numberOfRooms - 1
                })


                return {
                    status: true,
                    message: "Room has been booked successfully!"
                }
            }
            catch(err) {
                return {
                    status: false,
                    message: "Could not add booking, Please try again!"
                }
            }
        }
    } catch (err) {
        return {
            status: false,
            message: "Could not add booking, Please try again!"
        }
    }
}

const getAllBookings = async () => {
    try {
        const result = await bookings.find();

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

const confirmBooking = async (id) => {
    try {
        const response = await bookings.findOne({id});

        if(response) {
            await bookings.updateOne({id}, {
                bookingStatus: true
            })

            return {
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

export {
    addNewBooking,
    getAllBookings,
    confirmBooking
}