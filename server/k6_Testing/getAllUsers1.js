import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 50 }, // Ramp-up to 50 virtual users over 30 seconds
        { duration: '20s', target: 50 }, // Stay at 50 virtual users for 60 seconds
        { duration: '10s', target: 0 }, // Ramp-down to 0 virtual users over 30 seconds
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% of requests must complete within 500ms
    },
};

const BASE_URL = 'http://localhost:8000'; // Adjust based on your actual local server URL and port
const HOME_ENDPOINT = '/getAllUsers'; // Adjust based on your actual home page endpoint

export default function () {
    let res = http.get(`${BASE_URL}${HOME_ENDPOINT}`);

    // Perform a single check for status code 200
    check(res, {
        'status is 200': (r) => {
            console.log('Response status code:', r.status);
            return r.status === 200;
        },
    });
    

    // Output success message if the check passes
    // if (res.status === 200) {
    //     console.log('Success: Home page loaded successfully!');
    // }
    

    sleep(1); // Pause for 1 second between iterations
}
