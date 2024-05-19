import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 1, // Number of virtual users
    duration: '1s', // Duration of the test
};

const BASE_URL = 'http://localhost:8000'; // Base URL of the local server
const DELETE_USER_ENDPOINT = '/deleteUser/33001'; // Endpoint for deleting the user with ID 33000

export default function () {
    // Send the DELETE request to the delete user endpoint
    let deleteUserResponse = http.del(`${BASE_URL}${DELETE_USER_ENDPOINT}`);

    // Check the response
    check(deleteUserResponse, {
        'delete user response status is 200': (r) => r.status === 200,
        'user deleted message is present': (r) => r.body.includes('User deleted successfully!'), // Check for the success message in the response body
    });

    // Log the result
    if (deleteUserResponse.status === 200 && deleteUserResponse.body.includes('User deleted successfully!')) {
        console.log('User deleted successfully!');
    } else {
        console.log('Failed to delete user:', deleteUserResponse.body);
    }

    sleep(1); // Pause for 1 second between iterations
}
