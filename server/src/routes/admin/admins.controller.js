import {
    addNewAdmin,
    authenticateAdmin,
    getAllAdmins,
    deleteAdmin,
    getAdminById
} from "../../models/admin/admins.model.js";

const httpAddNewAdmin = async (req, res) => {
    try {
        const response = await addNewAdmin(req.body);

        if (response.status) {
            res.status(201).send(response);
        } else {
            res.status(201).send(response);
        }
    } catch (err) {
        res.status(406).send(response);
    }
}

const httpAuthenticateAdmin = async (req, res) => {
    try {
        const response = await authenticateAdmin(req.body);

        if (response.status) {
            return res.status(200).send(response);
        } else {
            return res.status(200).send(response);
        }
    } catch (err) {
        return res.status(404).send(response);
    }
}

const httpGetAllAdmins = async (req, res) => {
    try {
        const response = await getAllAdmins();

        res.status(200).send(response);
    } catch (err) {
        res.status(406).send(err);
    }
}

const httpDeleteAdmin = async (req, res) => {
    try {
        const response = await deleteAdmin(req.params.id);

        if(response.status) {
            res.status(200).send(response);
        }
        else {
            res.status(200).send(response);
        }
    }
    catch(err) {
        res.status(406).send(err)
    }
}

const httpGetAdminById = async (req, res) => {
    try {
        const response = await getAdminById(req.params.id);
        res.status(200).send(response);
    }
    catch(err) {
        res.status(404).send(err);
    }
}

export {
    httpAddNewAdmin,
    httpAuthenticateAdmin,
    httpGetAllAdmins,
    httpDeleteAdmin,
    httpGetAdminById
}