import {
    determineGenderByFullName,
    getAllUsers
} from "./services/usersService.js";
import {extractFirstName} from "./helpers/extractFirstName.js";
import {displayUserDetails} from "./ui/displayUserDetails.js";


const userWrapper = document.getElementById('userWrapper');


 const userDetails = function () {
    getAllUsers()
        .then(async users => {
            const userId = new URLSearchParams(location.search).get('id');
            const user = users.find(user => user.id === parseInt(userId));
            if (user) {
                const userName = extractFirstName(user.name);
                const gender = await determineGenderByFullName(userName);
                displayUserDetails(user, gender, userWrapper);
            } else {
                console.error('User not found');
            }
        })
        .catch(error => console.error('Error fetching users:', error));
}

userDetails();