import {getAllUsers} from "./services/usersService.js";
import {displayAllUsers} from "./ui/displayAllUsers.js";
const usersList = document.getElementById("usersList");



async function main() {
    try {
        const usersArr = (await getAllUsers()).map(user => ({id: user.id, name: user.name}));

        displayAllUsers(usersArr, usersList);
    } catch (error) {
        console.error('Error in main:', error);
    }
}


main().catch(error => console.error('Error calling main:', error));





