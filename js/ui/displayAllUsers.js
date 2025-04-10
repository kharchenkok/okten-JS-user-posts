import { displayErrorMessage } from './displayErrorMessage.js';


export function displayAllUsers(usersArr, parentElement) {

    parentElement.innerHTML = '';

    if (!usersArr || usersArr.length === 0) {
        parentElement.appendChild(displayErrorMessage('No users found'));
        return;
    }
    usersArr.forEach(user => {
        let liMarkup = `
            <li class="user-item">
              <a href="pages/user-details.html?id=${user.id}">
                <h3><span>${user.id}</span> - ${user.name} </h3>
                <span class="btn">View Details</span>
              </a>
            </li>
        `;
        parentElement.insertAdjacentHTML('beforeend', liMarkup);
    });

    // const usersList = document.createElement('ul');
    // usersList.className = 'users-list fade-in';
    //
    // usersArr.forEach((user, index) => {
    //     const liElement = document.createElement('li');
    //     liElement.className = 'user-item';
    //     liElement.style.animationDelay = `${index * 0.1}s`;
    //
    //     liElement.innerHTML = `
    //         <a href="pages/user-details.html?id=${user.id}" class="user-link">
    //             <h3><span>#${user.id}</span> ${user.name}</h3>
    //         </a>
    //     `;
    //
    //     usersList.appendChild(liElement);
    // });
    //
    // parentElement.appendChild(usersList);
}