export function displayUserPosts(posts, parentElement) {
    parentElement.innerHTML = '';

    const list = document.createElement('ul');
    list.classList.add('post-list');

    posts.forEach(post => {
        const itemMarkup = `
            <li class="post-card ">
                <a href="post-details.html?id=${post.id}" class="post-link">${post.title}</a>
            </li>
        `;
        list.insertAdjacentHTML('beforeend', itemMarkup);
    });

    parentElement.appendChild(list);
}