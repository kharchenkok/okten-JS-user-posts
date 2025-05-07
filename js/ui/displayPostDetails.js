import {
    capitalizeFirstLetter
} from "../helpers/capitalizeFirstLetter.js";

export function displayUPostDetails(post,author, parentElement) {
    parentElement.innerHTML = '';



        const postDetailsMarkup = `
            <div class="post-title">
              <h1>${post.title}</h1>
              <p>by <span>${author.name}</span></p>
            </div>
            <p>${capitalizeFirstLetter(post.body)}</p>
        `;



    parentElement.insertAdjacentHTML('afterbegin',postDetailsMarkup);
}