import contactUs from './contactUs.mongo.js';

const getLatestId = async () => {
    const latestId = await contactUs.findOne().sort('-id');

    if (!latestId) {
        return 1;
    }
    return latestId.id + 1;
}

const addNewComplaint = async (data) => {
    try {
        const id = await getLatestId();

        if ((await contactUs.find({
                email: data.email,
                problem: data.problem
            })).length > 0) {
            return {
                status: false,
                message: "This response is already submitted!"
            }
        } else {
            try {
                await contactUs.create({
                    id,
                    resolved: false,
                    ...data
                })

                return {
                    status: true,
                    message: "Response submitted successfully!"
                }
            } catch (err) {
                return {
                    status: false,
                    message: "Response could not be submitted, please try again!"
                }
            }
        }
    } catch (err) {
        return {
            status: false,
            message: "Response could not be submitted, please try again!"
        }
    }
}

const getAllComplaints = async () => {
    try {
        const result = await contactUs.find();

        return {
            result,
            status: true
        }
    } catch (err) {
        return {
            status: false
        }
    }
}

const markAsResolved = async (id) => {
    try {
        const result = await contactUs.findOne({
            id
        });
        // console.log(result);
        if (result) {
            await contactUs.updateOne({
                id
            }, {
                resolved: true
            })
            return {
                status: true
            }

        } else {
            return {
                status: false
            }
        }
    } catch (err) {
        return {
            status: false
        }
    }
}

export {
    addNewComplaint,
    getAllComplaints,
    markAsResolved
}