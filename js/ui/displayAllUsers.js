export function displayAllUsers(usersArr,parentElement) {
    usersArr.forEach(user => {
        let liMarkup = `
            <li class="user-item">
                <h3><span>${user.id}</span> - ${user.name} </h3>
                
                <a href="pages/user-details.html?id=${user.id}">View Details</a>
            </li>
        `;
        parentElement.insertAdjacentHTML('beforeend', liMarkup);
    });
}