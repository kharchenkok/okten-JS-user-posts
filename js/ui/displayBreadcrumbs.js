export function displayBreadcrumbs(links) {
    const nav = document.createElement('nav');
    nav.classList.add('breadcrumbs');

    links.forEach((link, index) => {
        const span = document.createElement('span');

        if (link.href) {
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.label;
            span.appendChild(a);
        } else {
            span.textContent = link.label;
        }

        nav.appendChild(span);

        if (index < links.length - 1) {
            const separator = document.createElement('span');
            separator.textContent = ' > ';
            nav.appendChild(separator);
        }
    });

    return nav;
}
