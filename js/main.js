import { getAllUsers } from "./services/usersService.js";
import { displayAllUsers } from "./ui/displayAllUsers.js";
import { displayErrorMessage } from "./ui/displayErrorMessage.js";
import {displaySpinner} from "./ui/displaySpinner.js";

// Get DOM elements
const usersList = document.getElementById("usersList");



// Main function
async function allUsers() {
    try {
        // Add loading spinner
        const spinner = displaySpinner();
        usersList.insertAdjacentElement('beforebegin', spinner);

        // Get users
        const users = await getAllUsers();

        // Remove spinner
        spinner.remove();

        // Display users
        displayAllUsers(users, usersList);
    } catch (error) {
        usersList.innerHTML = '';
        usersList.appendChild(displayErrorMessage(`Error loading users: ${error.message}`));
        console.error('Error:', error);
    }
}

// Start the app
allUsers().catch(error => console.error('Error:', error));


