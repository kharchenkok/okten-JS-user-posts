import {
    formatPhoneForDisplay,
    formatPhoneForHref
} from "../helpers/formatPhoneNumber.js";
import {
    capitalizeFirstLetter
} from "../helpers/capitalizeFirstLetter.js";

export function displayUserDetails(user,gender,userImgUrl,parentElement) {
   
    const userDetailsMarkup = `
        <h1><span>${user.id} - ${user.name}</span>(${user.username})</h1>
        <div class="user-details">
            <div class="user-image">
                <img src="${userImgUrl}" alt="${user.name} photo" width="300" height="300">
            </div>  
            <div class="user-info">
              
                <ul class="user-contact">
                   
                     ${Object.keys(user).map(key => {
                         
                            if (key === "email") {
                                const email = user[key];
                                if (email) {
                                    return `
                                                    <li>
                                                        <span>${capitalizeFirstLetter(key)}:</span> 
                                                       <a href="mailto:${email}">${email}</a>
                                                    </li>
                                                `;
                                }

                                
                            } else if (key === "phone") {
                                const phone = user[key];
                                if (phone) {
                                    const phoneHref = formatPhoneForHref(phone);
                                    const phoneDisplay = formatPhoneForDisplay(phone);
                                    return `
                                                    <li>
                                                        <span>${capitalizeFirstLetter(key)}:</span>  
                                                        <a href="tel:+${phoneHref}">${formatPhoneForDisplay(phoneDisplay)}</a>
                                                    </li>
                                                `;
                                }
    
                                
                            } else if(key === "address"){
                                const address = user[key];
                                if (address) {
                                    return `
                                                    <li>
                                                        <span>${capitalizeFirstLetter(key)}:</span>  
                                                        <a href="https://www.google.com/maps?q=${address.geo.lat},${address.geo.lng}" target="_blank">
                                                             ${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}
                                                        </a>
                                                        
                                                    </li>
                                                `;
                                }
                            }else if(key === "website"){
                                const website = user[key];
                                if (website) {
                                    const websiteUrl = website.startsWith('http') ? website : `https://${website}`;
                                    return `
                                                    <li>
                                                        <span>${capitalizeFirstLetter(key)}:</span>  
                                                        <a href="${websiteUrl}" target="_blank">
                                                             ${website}
                                                        </a>
                                                        
                                                    </li>
                                                `;
                                }
                            }else if (key === "company") {
                                const company = user[key];
                                if (company) {
                                    return `
                                                    <li>
                                                       <span>${capitalizeFirstLetter(key)}:</span> 
                                                        ${company.name} (${company.catchPhrase})
                                                        ${company.bs ? `
                                                            <div>
                                                                <span>Business Specialty:</span>
                                                                <ul class="bs-list">
                                                                    ${company.bs.split(' ').map(bsItem => {
                                                                                return `<li>${bsItem.trim()}</li>`;
                                                                            }).join('')}
                                                                </ul>
                                                            </div>
                                                        ` : ''}
                                                    </li>
                                                `;
                                }
                            }else if (key !== "id" && key !== "name" && key !== "username" && user[key]) {
                                return `
                                                <li>
                                                     <span>${capitalizeFirstLetter(key)}:</span> 
                                                    ${user[key]}
                                                </li>
                                            `;
                            }
                        }).join('')}
                
                </ul>
            </div>
        </div>
    `;
    parentElement.insertAdjacentHTML('afterbegin', userDetailsMarkup);
}

