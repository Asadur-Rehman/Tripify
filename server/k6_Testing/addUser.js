import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 1, // Number of virtual users
    duration: '1s', // Duration of the test
};

const BASE_URL = 'http://localhost:8000'; // Base URL of the local server
const ADD_USER_ENDPOINT = '/addUser'; // Endpoint for adding a user

export default function () {
    // Payload for the add user request
    let userPayload = JSON.stringify({
        id: 330011,
        email: 'a@gmail11.com',
        password: 'pass11',
        firstName: 'frname01',
        lastName: 'ltname01'
    });

    let userHeaders = {
        headers: { 'Content-Type': 'application/json' },
    };

    // Send the POST request to the add user endpoint
    let addUserResponse = http.post(`${BASE_URL}${ADD_USER_ENDPOINT}`, userPayload, userHeaders);

    // Check the response
    check(addUserResponse, {
        // 'add user response status is 200': (r) => r.status === 200,
        'user created successfully message is present': (r) => r.body.includes('User created successfully!'),
    });

    // Log the result
    if (addUserResponse.body.includes('User created successfully!')) {
        console.log('User added successfully!');
    } else {
        console.log('Failed to add user:', addUserResponse.body);
    }

    sleep(1); // Pause for 1 second between iterations
}
