export function displayUPostDetails(post,author, parentElement) {
    parentElement.innerHTML = '';



        const postDetailsMarkup = `
            <div class="post-">
            <div class="post-title">
              <h1>${post.title}</h1>
              <p>by <span>${author.name}</span></p>
              </div>
              <p>${post.body}</p>
            </div>
        `;



    parentElement.insertAdjacentHTML('afterbegin',postDetailsMarkup);
}