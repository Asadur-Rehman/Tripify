import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 1000 }, // Ramp-up to 50 virtual users over 10 seconds
        { duration: '20s', target: 1000 }, // Stay at 50 virtual users for 20 seconds
        { duration: '10s', target: 0 }, // Ramp-down to 0 virtual users over 10 seconds
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% of requests must complete within 500ms
    },
};

const BASE_URL = 'http://localhost:8000'; // Base URL of the local server
const GET_HOTELS_ENDPOINT = '/getAllHotels'; // Endpoint for getting all hotels

export default function () {
    let res = http.get(`${BASE_URL}${GET_HOTELS_ENDPOINT}`);

    // Perform a single check for status code 200
    check(res, {
        'status is 200': (r) => {
            //console.log('Response status code:', r.status);
            return r.status === 200;
        },
    });

    sleep(1); // Pause for 1 second between iterations
}
