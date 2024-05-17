import admins from './admins.mongo.js';

const getLatestAdminId = async () => {
    const latestId = await admins.findOne().sort('-id');
    if(!latestId) {
        return 1;
    }
    return latestId.id + 1;
}

const addNewAdmin = async (adminData) => {
    try {
        const newAdminId = await getLatestAdminId();

        if((await admins.find({email: adminData.email})).length > 0) {
            return {
                status: false,
                message: "Admin already exists!"
            }
        }
        else {
            try {
                await admins.create({
                    id: newAdminId,
                    ...adminData
                })

                return {
                    status: true,
                    message: "Admin created successfully!"
                }
            }
            catch(err) {
                return {
                    status: false,
                    message: "Admin couldn't be created, please try again!"
                }
            }
        }
    }
    catch(err) {
        return {
            status: false,
            message: "Admin could not be created, please try again!" 
        }
    }
}

const authenticateAdmin = async (adminData) => {
    try {
        if(await admins.findOne({email: adminData.email})) {
            const result = await admins.findOne({email: adminData.email, password: adminData.password}); 
            if(result) {
                return {
                    result,
                    status: true,
                    message: "Admin verified successfully!"
                }
            }
            else {
                return {
                    status: false,
                    message: "Incorrect Password!"
                }
            }
        }
        else {
            return {
                status: false,
                message: "Admin not found!"
            }
        }
        
    }
    catch (err) {
        return {
            status: false,
            message: "Please try again!"
        }
    }
}

const getAllAdmins = async () => {
    try {
        const result = await admins.find();
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

const deleteAdmin = async (id) => {
    try { 
        await admins.deleteOne({id});

        return {
            status: true
        }
    }
    catch(err) {
        return {
            status: false
        }
    }
}

const getAdminById = async (id) => {
    try {
        const result = await admins.findOne({id});

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
            status: false,
        }
    }
}

export {
    addNewAdmin,
    authenticateAdmin,
    getAllAdmins,
    deleteAdmin,
    getAdminById
}

