import express from 'express';
import {
    httpAddNewComplaint,
    httpGetAllComplaints,
    httpMarkAsResolved
} from './contactUs.controller.js';

const contactUsRouter = express.Router();

contactUsRouter.post('/addNewComplaint', httpAddNewComplaint);
contactUsRouter.get('/getAllComplaints', httpGetAllComplaints);
contactUsRouter.post('/resolveComplaint/:id', httpMarkAsResolved);

export {
    contactUsRouter
}