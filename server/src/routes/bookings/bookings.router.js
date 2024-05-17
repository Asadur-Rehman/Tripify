import express from 'express';
import { httpAddNewBooking, httpGetAllBookings, httpConfirmBooking } from './bookings.controller.js';

const bookingsRouter = express.Router();

bookingsRouter.post('/addNewBooking', httpAddNewBooking);
bookingsRouter.get('/getAllBookings', httpGetAllBookings);
bookingsRouter.post('/confirmBooking/:id', httpConfirmBooking);

export {
    bookingsRouter
}