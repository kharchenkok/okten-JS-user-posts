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

const postsWrapper = document.getElementById('postsWrapper');
const commentsWrapper = document.getElementById('commentsWrapper');



async function postDetails() {
    try {
        // Add loading spinner
        const spinner = displaySpinner();
        postsWrapper.appendChild(spinner);

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
        console.log(comments)


        // Remove spinner
        spinner.remove();

        console.log('post', post);
        // Display user details
        displayUPostDetails(post, user, postsWrapper);
        // Display comments
        displayPostComments(comments, commentsWrapper);


    } catch (error) {
        postsWrapper.innerHTML = '';
        postsWrapper.appendChild(displayErrorMessage(`Error loading user: ${error.message}`));
        console.error('Error:', error);
    }
}

// Start the app
postDetails().catch(error => console.error('Error:', error));