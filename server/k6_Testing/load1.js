import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 30, // Number of virtual users
    duration: '60s', // Duration of the test
};

const BASE_URL = 'http://localhost:3000'; // Replace with your actual local server URL and port
const LOGIN_ENDPOINT = '/'; // Adjust based on your actual login endpoint

export default function () {
    // Step 1: Load the login page
    let loginPage = http.get(`${BASE_URL}${LOGIN_ENDPOINT}`);
    check(loginPage, {
        'login page status is 200': (r) => r.status === 200,
    });

    // Step 2: Submit the login form
    let loginPayload = JSON.stringify({
        username: 'ahmedabdullah19april@gmail.com', // Replace with valid username
        password: '11223344', // Replace with valid password
    });

    let loginHeaders = {
        headers: { 'Content-Type': 'application/json' },
    };

    let loginResponse = http.post(`${BASE_URL}${LOGIN_ENDPOINT}`, loginPayload, loginHeaders);
    check(loginResponse, {
        'login response status is 200': (r) => r.status === 200,
        'login successful': (r) => r.json('token') !== '', // Assuming a token is returned on successful login
    });

    // Optionally, you can add more checks based on the response content
    // e.g., checking if the response contains a specific text or JSON attribute

    sleep(1); // Pause for 1 second between iterations
}
