import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';

import { usersRouter } from './routes/users/users.router.js';
import { contactUsRouter } from './routes/contactUs/contactUs.router.js';
import { hotelsRouter } from './routes/hotels/hotels.router.js';
import { bookingsRouter } from './routes/bookings/bookings.router.js';
import { adminsRouter } from './routes/admin/admins.router.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('short'));
// app.use(fileUpload());

app.use(usersRouter);
app.use(contactUsRouter);
app.use(hotelsRouter);
app.use(bookingsRouter);
app.use(adminsRouter);

export {
    app
}