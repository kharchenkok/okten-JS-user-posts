export async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}


export async function determineGenderByFullName(firstName) {

    try {
        const response = await fetch(`https://api.genderize.io?name=${firstName}`);

        if (!response.ok) {
            throw new Error("Error fetching data from Genderize API");
        }

        const data = await response.json();

        if (data.gender) {
            return data.gender === 'male' ? 'men' : 'women';
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error:", error);
    }
}