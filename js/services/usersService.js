import { fetchData } from './fetchData.js';

export async function getAllUsers() {
    try {
        const data = await fetchData('/users');
        if (!Array.isArray(data)) {
            throw new Error('Invalid response format: expected array');
        }
        return data;
    } catch (error) {
        throw new Error(`Error getting users: ${error.message}`);
    }
}

export async function getUserById(userId) {
    try {
        const user = await fetchData(`/users/${userId}`);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error(`Error getting user: ${error.message}`);
    }
}

export async function getUserGender(firstName) {
    try {
        const response = await fetch(`https://api.genderize.io?name=${firstName}`);
        if (!response.ok) {
            throw new Error('Error getting data from Genderize API');
        }

        const data = await response.json();
        return data.gender ? (data.gender === 'male' ? 'men' : 'women') : null;
    } catch (error) {
        console.warn('Error determining gender:', error);
        return null;
    }
}