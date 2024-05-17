import { addNewBooking, getAllBookings, confirmBooking } from "../../models/bookings/bookings.model.js";

const httpAddNewBooking = async (req, res) => {
    try {
        const response = await addNewBooking(req.body);
        if(response.status) {
            res.status(201).send(response);
        }
        else {
            res.status(200).send(response);
        }
    }
    catch(err) {
        res.status(406).send(err);
    }
}

const httpGetAllBookings = async (req, res) => {
    try {
        const response = await getAllBookings();

        res.status(200).send(response);
    }
    catch(err) {
        res.status(404).send(err);
    }
}

const httpConfirmBooking = async (req, res) => {
    try {
        const result = await confirmBooking(req.params.id);

        res.status(200).send(result);
    }
    catch(err) {
        res.status(406).send(err);
    }
}

export {
    httpAddNewBooking,
    httpGetAllBookings,
    httpConfirmBooking
}