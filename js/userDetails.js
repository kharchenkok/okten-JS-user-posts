import {
    determineGenderByFullName,
    getAllUsers
} from "./services/usersService.js";


const userWrapper = document.getElementById('userWrapper');

function displayUserDetails(user,gender,parentElement) {
    console.log('user', user);
    console.log('gender', gender);
    const img = document.createElement('img');
    img.src = `https://randomuser.me/api/portraits/${gender}/${user.id}.jpg`;
    img.alt = `${user.name}'s picture`;
    img.classList.add('user-image');
    parentElement.appendChild(img);
}

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//         "lat": "-37.3159",
//             "lng": "81.1496"
//     }
// },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
// }
// }
function extractFirstName(fullName) {

    const titlePattern = /^(Mrs?|Mr|Dr|Prof)\./i;
    const cleanedName = fullName.replace(titlePattern, '').trim();
    const nameParts = cleanedName.split(' ');
    return nameParts[0];
}



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