import express from 'express';

import {
    httpAddNewAdmin,
    httpAuthenticateAdmin,
    httpGetAllAdmins,
    httpDeleteAdmin,
    httpGetAdminById
} from './admins.controller.js';

const adminsRouter = express.Router();

adminsRouter.post('/addAdmin', httpAddNewAdmin);
adminsRouter.post('/authenticateAdmin', httpAuthenticateAdmin);
adminsRouter.get('/getAllAdmins', httpGetAllAdmins);
adminsRouter.post('/deleteAdmin/:id', httpDeleteAdmin);
adminsRouter.get('/getAdminById/:id', httpGetAdminById);

export {
    adminsRouter
}