import {displaySpinner} from "./ui/displaySpinner.js";


import {
    getPostById,

} from "./services/postsService.js";

import {
    displayErrorMessage
} from "./ui/displayErrorMessage.js";

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


        // Remove spinner
        spinner.remove();

        console.log('post', post);
        // Display user details
        // displayUserDetails(user, gender, userWrapper);

    } catch (error) {
        postWrapper.innerHTML = '';
        postWrapper.appendChild(displayErrorMessage(`Error loading user: ${error.message}`));
        console.error('Error:', error);
    }
}

// Start the app
postDetails().catch(error => console.error('Error:', error));