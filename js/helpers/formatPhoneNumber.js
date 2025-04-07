export function formatPhoneForDisplay(phone) {
    const [mainPhone, extension] = phone.split('x');
    const base = mainPhone.replace(/\D/g, '');

    const blocks = [];

    for (let i = 0; i < base.length; i += 3) {
        blocks.push(base.slice(i, i + 3));
    }

    let formattedPhone = blocks.join('-');

    if (extension) {
        const formattedExtension = extension.trim().replace(/\D/g, '');
        formattedPhone += ` ext:${formattedExtension}`;
    }

    return formattedPhone;
}

export function formatPhoneForHref(phone) {
    return phone.split('x')[0].replace(/\D/g, '');
}