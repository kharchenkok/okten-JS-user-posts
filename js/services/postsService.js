import { fetchData } from './fetchData.js';
import {BASE_URL} from "../../constants/api.js";

export async function getPostsByUserID(userId) {
    return fetchData(`/users/${userId}/posts`,BASE_URL);
}

export async function getPostById(postId) {
    return fetchData(`/posts/${postId}`,BASE_URL);
}

export async function getPostCommentsById(postId) {
    return fetchData(`/posts/${postId}/comments`,BASE_URL);
}