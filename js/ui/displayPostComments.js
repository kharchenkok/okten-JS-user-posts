export function displayPostComments(comments, parentElement) {
    parentElement.innerHTML = '';

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
        parentElement.insertAdjacentHTML('beforeend', itemMarkup);
    });


}