export function extractFirstName(fullName) {

    const titlePattern = /^(Mrs?|Mr|Dr|Prof)\./i;
    const cleanedName = fullName.replace(titlePattern, '').trim();
    const nameParts = cleanedName.split(' ');
    return nameParts[0];
}