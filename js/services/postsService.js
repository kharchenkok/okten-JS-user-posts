import { fetchData } from './fetchData.js';

export async function getPostsByID(userId) {
    return fetchData(`/users/${userId}/posts`);
}