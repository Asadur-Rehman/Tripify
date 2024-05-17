import {
    addNewComplaint,
    getAllComplaints,
    markAsResolved
} from "../../models/contactUs/contactUs.model.js";

const httpAddNewComplaint = async (req, res) => {
    try {
        const response = await addNewComplaint(req.body);

        if (response.status) {
            res.status(201).send(response);
        } else {
            res.status(200).send(response);
        }
    } catch (err) {
        res.status(406).send(err);
    }
}

const httpGetAllComplaints = async (req, res) => {
    try {
        const response = await getAllComplaints();

        res.status(200).send(response)
    } catch (err) {
        res.status(404).send(err)
    }
}

const httpMarkAsResolved = async (req, res) => {
    try {
        const response = await markAsResolved(req.params.id);

        res.status(200).send(response);
    } catch (err) {
        res.status(404).send(err);
    }
}

export {
    httpAddNewComplaint,
    httpGetAllComplaints,
    httpMarkAsResolved
}