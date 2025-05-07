import {displaySpinner} from "./ui/displaySpinner.js";


import {
    getPostById, getPostCommentsById,

} from "./services/postsService.js";

import {
    displayErrorMessage
} from "./ui/displayErrorMessage.js";
import {getUserById} from "./services/usersService.js";
import {displayUPostDetails} from "./ui/displayPostDetails.js";
import {
    displayPostComments
} from "./ui/displayPostComments.js";
import {displayBreadcrumbs} from "./ui/displayBreadcrumbs.js";

const postWrapper = document.getElementById('postWrapper');
const commentsWrapper = document.getElementById('commentsWrapper');



async function postDetails() {
    try {
        // Add loading spinner
        const spinner = displaySpinner();
        postWrapper.appendChild(spinner);

        // Get post ID from URL
        const postId = new URLSearchParams(location.search).get('id');
        if (!postId) {
            throw new Error('Post ID not provided');
        }

        // Get post details
        const post = await getPostById(parseInt(postId));
        const user = await getUserById(post.userId);
        // Get comments
        const comments = await getPostCommentsById(postId);



        // Remove spinner
        spinner.remove();

        const breadcrumbs = displayBreadcrumbs([
            { label: 'Home', href: '../index.html' },
            { label: user.name, href: `user-details.html?id=${user.id}` },
            { label: 'Post' } // поточна сторінка
        ]);
        postWrapper.parentNode.prepend(breadcrumbs);
        // Display user details
        displayUPostDetails(post, user, postWrapper);
        // Display comments
        displayPostComments(comments, commentsWrapper);


    } catch (error) {
        postWrapper.innerHTML = '';
        postWrapper.appendChild(displayErrorMessage(`Error loading user: ${error.message}`));
        console.error('Error:', error);
    }
}

// Start the app
postDetails().catch(error => console.error('Error:', error));