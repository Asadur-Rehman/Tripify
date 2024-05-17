import express from 'express';

import {
    httpAddNewUser,
    httpAuthenticateUser,
    httpGetAllUsers,
    httpDeleteUser,
    httpGetUserById
} from './users.controller.js';

const usersRouter = express.Router();

usersRouter.post('/addUser', httpAddNewUser);
usersRouter.post('/authenticateUser', httpAuthenticateUser);
usersRouter.get('/getAllUsers', httpGetAllUsers);
usersRouter.post('/deleteUser/:id', httpDeleteUser);
usersRouter.get('/getUserById/:id', httpGetUserById);

export {
    usersRouter
}