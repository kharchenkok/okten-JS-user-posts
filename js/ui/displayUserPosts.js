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
        // const listItem = document.createElement('li');
        //
        // const link = document.createElement('a');
        // link.href = `post-details.html?id=${post.id}`;
        // link.textContent = post.title;
        // link.classList.add('post-link');
        //
        // listItem.appendChild(link);
        // list.appendChild(listItem);
        list.insertAdjacentHTML('beforeend', itemMarkup);
    });

    parentElement.appendChild(list);
}