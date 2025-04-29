import { displayErrorMessage } from './displayErrorMessage.js';


export function displayAllUsers(usersArr, parentElement) {

    parentElement.innerHTML = '';

    if (!usersArr || usersArr.length === 0) {
        parentElement.appendChild(displayErrorMessage('No users found'));
        return;
    }
    usersArr.forEach(user => {
        let liMarkup = `
            <li class="users-item">
              <a href="pages/user-details.html?id=${user.id}">
                <h3><span>${user.id}</span> - ${user.name} </h3>
                <span class="btn">View Details</span>
              </a>
            </li>
        `;
        parentElement.insertAdjacentHTML('beforeend', liMarkup);
    });

}