import { fetchData } from './fetchData.js';
import { BASE_URL,GENDERIZE_API_URL,
    GENDER_API_URL,
    GENDER_API_KEY,RANDOM_USER_IMAGE_BASE_URL } from '../../constants/api.js';

export async function getAllUsers() {
    try {
        const data = await fetchData('/users', BASE_URL);
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
        const user = await fetchData(`/users/${userId}`, BASE_URL);
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
        const endpoint = `?name=${firstName}`;
        const data = await fetchData(endpoint, GENDERIZE_API_URL);

        return data.gender ? (data.gender === 'male' ? 'men' : 'women') : null;
    } catch (error) {
        // Якщо Genderize API не працює (в т.ч. ліміт) — fallback
        console.warn('Genderize API failed, falling back to Gender-API:', error.message);
        return await getGenderFromGenderAPI(firstName);
    }
}

async function getGenderFromGenderAPI(firstName) {
    try {
        const endpoint = `?name=${firstName}&key=${GENDER_API_KEY}`;
        const data = await fetchData(endpoint, GENDER_API_URL);
        console.log('Gender-API response success');

        return data.gender ? (data.gender === 'male' ? 'men' : 'women') : null;
    } catch (error) {
        console.warn('Gender-API also failed:', error.message);
        return null;
    }
}

export function getUserImageUrl(userId, gender) {
    return `${RANDOM_USER_IMAGE_BASE_URL}/${gender}/${userId}.jpg`;
}