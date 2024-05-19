import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 1, // Number of virtual users
    duration: '1s', // Duration of the test
};

const BASE_URL = 'http://localhost:8000'; // Base URL of the local server
const ADD_COMPLAINT_ENDPOINT = '/addNewComplaint'; // Endpoint for adding a new complaint

export default function () {
    // Payload for the add complaint request
    let complaintPayload = JSON.stringify({
        id: 33000,
        problem: 'unable to login',
        description: 'it says not logged in',
        email: 'ab@gmail.com',
        firstName: 'Asad1',
        lastName: 'Rehman1',
        resolved: false
    });

    let complaintHeaders = {
        headers: { 'Content-Type': 'application/json' },
    };

    // Send the POST request to the add complaint endpoint
    let addComplaintResponse = http.post(`${BASE_URL}${ADD_COMPLAINT_ENDPOINT}`, complaintPayload, complaintHeaders);

    // Check the response
    check(addComplaintResponse, {
        'add complaint response status is 200': (r) => r.status === 200,
        'complaint added successfully message is present': (r) => r.body.includes('This response is already submitted!'),
    });

    // Log the result
    if (addComplaintResponse.body.includes('This response is already submitted!')) {
        console.log('Complaint Already exists test passed');
    } else {
        console.log('Failed to add complaint:', addComplaintResponse.body);
    }

    sleep(1); // Pause for 1 second between iterations
}
