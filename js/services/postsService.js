import { fetchData } from './fetchData.js';

export async function getPostsByUserID(userId) {
    return fetchData(`/users/${userId}/posts`);
}

export async function getPostById(postId) {
    return fetchData(`/posts/${postId}`);
}