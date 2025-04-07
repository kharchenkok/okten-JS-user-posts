export function displayUserPosts(posts, parentElement) {
    parentElement.innerHTML = '';

    const list = document.createElement('ul');
    list.classList.add('post-list');

    posts.forEach(post => {
        const listItem = document.createElement('li');

        const link = document.createElement('a');
        link.href = `post-details.html?id=${post.id}`;
        link.textContent = post.title;
        link.classList.add('post-link');

        listItem.appendChild(link);
        list.appendChild(listItem);
    });

    parentElement.appendChild(list);
}