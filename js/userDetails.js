import {
    getUserById,
    getUserGender,
    getUserImageUrl
} from "./services/usersService.js";
import { extractFirstName } from "./helpers/extractFirstName.js";
import { displayUserDetails } from "./ui/displayUserDetails.js";
import { getPostsByUserID } from "./services/postsService.js";
import { displayUserPosts } from "./ui/displayUserPosts.js";
import { displayErrorMessage } from "./ui/displayErrorMessage.js";
import {displaySpinner} from "./ui/displaySpinner.js";
import {displayBreadcrumbs} from "./ui/displayBreadcrumbs.js";

const userWrapper = document.getElementById('userWrapper');
const postsWrapper = document.getElementById('postsWrapper');

async function userDetails() {
    try {
        // Add loading spinner
        const spinner = displaySpinner();
        userWrapper.appendChild(spinner);

        // Get user ID from URL
        const userId = new URLSearchParams(location.search).get('id');
        if (!userId) {
            throw new Error('User ID not provided');
        }

        // Get user details
        const user = await getUserById(parseInt(userId));
        const userName = extractFirstName(user.name);
        const gender = await getUserGender(userName);
        const avatarUrl = gender ? getUserImageUrl(userId, gender) : '../image/no-profile.png';

        // Remove spinner
        spinner.remove();

        // Add breadcrumbs
        const breadcrumbs = displayBreadcrumbs([
            { label: 'Home', href: '../index.html' },
            { label: user.name }
        ]);
        userWrapper.parentNode.prepend(breadcrumbs);
        // Display user details
        displayUserDetails(user, gender,avatarUrl, userWrapper);

        // Create posts button
        const postsBtn = document.createElement('button');
        postsBtn.classList.add('btn','posts-btn');
        postsBtn.textContent = 'Show Posts';

        // Handle posts toggle
        postsBtn.addEventListener('click', async () => {
            if (postsWrapper.children.length === 0) {
                const postsSpinner = displaySpinner();
                postsWrapper.appendChild(postsSpinner);

                try {
                    const posts = await getPostsByUserID(user.id);
                    postsSpinner.remove();
                    displayUserPosts(posts, postsWrapper);
                    postsBtn.textContent = 'Hide Posts';
                } catch (error) {
                    postsSpinner.remove();
                    postsWrapper.appendChild(displayErrorMessage(`Error loading posts: ${error.message}`));
                }
            } else {
                postsWrapper.innerHTML = '';
                postsBtn.textContent = 'Show Posts';
            }
        });

        userWrapper.appendChild(postsBtn);
    } catch (error) {
        userWrapper.innerHTML = '';
        userWrapper.appendChild(displayErrorMessage(`Error loading user: ${error.message}`));
        console.error('Error:', error);
    }
}

// Start the app
userDetails().catch(error => console.error('Error:', error));
