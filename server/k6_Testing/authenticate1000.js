import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 1000, // Number of virtual users
    duration: '100s', // Duration of the test
};

const BASE_URL = process.env.REACT_APP_SERVER_URL; // Base URL of the local server
const AUTH_ENDPOINT = '/authenticateUser'; // Authentication endpoint

export default function () {
    // Payload for the authentication request
    let authPayload = JSON.stringify({
        id: 1,
        email: 'aurehman.bese21seecs@seecs.edu.pk',
        password: '1234',
        firstName: 'Asad',
        lastName: 'Rehman'
    });

    let authHeaders = {
        headers: { 'Content-Type': 'application/json' },
    };

    // Send the POST request to the authentication endpoint
    let authResponse = http.post(`${BASE_URL}${AUTH_ENDPOINT}`, authPayload, authHeaders);

    // Check the response
    check(authResponse, {
        'authentication response status is 200': (r) => r.status === 200,
        'authentication successful': (r) => r.json('token') !== '', // Assuming a token is returned on successful authentication
    });

    // Log the result
    if (authResponse.status === 200 && authResponse.json('token')) {
        console.log('Authentication successful!');
    } else {
        console.log('Authentication failed:', authResponse.body);
    }

    sleep(1); // Pause for 1 second between iterations
}
