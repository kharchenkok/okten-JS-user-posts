export function displayUserDetails(user,gender,parentElement) {
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