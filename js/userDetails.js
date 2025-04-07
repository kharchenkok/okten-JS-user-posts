import {
    determineGenderByFullName,
    getAllUsers
} from "./services/usersService.js";
import {extractFirstName} from "./helpers/extractFirstName.js";
import {displayUserDetails} from "./ui/displayUserDetails.js";
import {getPostsByID} from "./services/postsService.js";
import {displayUserPosts} from "./ui/displayUserPosts.js";


const userWrapper = document.getElementById('userWrapper');
const postsWrapper = document.getElementById('postsWrapper');


 const userDetails = function () {
    getAllUsers()
        .then(async users => {
            const userId = new URLSearchParams(location.search).get('id');
            const user = users.find(user => user.id === parseInt(userId));
            if (user) {
                const userName = extractFirstName(user.name);
                const gender = await determineGenderByFullName(userName);
                displayUserDetails(user, gender, userWrapper);
                const postsBtn = document.createElement('button');
                postsBtn.textContent = 'Show Posts of current user';
                postsBtn.addEventListener('click', async () => {
                    // const posts = await getPostsByID(user.id);
                    // displayUserPosts(posts, postsWrapper);
                    if (postsWrapper.children.length === 0) {
                        // Якщо пости ще не відображаються, завантажуємо їх
                        const posts = await getPostsByID(user.id);
                        displayUserPosts(posts, postsWrapper); // Функція, що додає пости в postsWrapper
                        postsBtn.textContent = 'Hide Posts of current user'; // Змінюємо текст кнопки
                    } else {
                        // Якщо пости вже відображаються, очищуємо контейнер
                        postsWrapper.innerHTML = ''; // Очищаємо пости
                        postsBtn.textContent = 'Show Posts of current user'; // Відновлюємо початковий текст кнопки
                    }
                });
                userWrapper.appendChild(postsBtn);
            } else {
                console.error('User not found');
            }
        })
        .catch(error => console.error('Error fetching users:', error));
}

userDetails();