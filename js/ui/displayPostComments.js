export function displayPostComments(comments, parentElement) {
    parentElement.innerHTML = '';
    const title = document.createElement('h2');
    title.textContent = 'Comments';
    title.classList.add('comments-title');
    const list = document.createElement('ul');
    list.classList.add('comments-list');

    comments.forEach(comment => {
        const itemMarkup = `
            <li class="comment-card ">
                <h3>${comment.name}</h3>
                <p>
                    ${comment.body}
                </p>
                <a href="mailto:${comment.email}">${comment.email}</a>
            </li>
        `;
        list.insertAdjacentHTML('beforeend', itemMarkup);
    });

    parentElement.append(title,list);
}