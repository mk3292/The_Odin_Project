import restaurantImage from './pic.jpg';

export function initialPageLoad() {

    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren(); // remove any existing DOM elements if present


    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Mitch's Restaurant";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const topImage = document.createElement("img");
    topImage.classList.add("image");
    topImage.src = restaurantImage;
    topImage.alt = "Image of restaurant";
    contentDiv.appendChild(topImage);

    const para1 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "This is a cool restaurant with gimbap";
    contentDiv.appendChild(para1);

    const para2 = document.createElement("p");
    para2.classList.add("landing-page-copy");
    para2.textContent = "Attire requires at least shoes";
    contentDiv.appendChild(para2);

    const para3 = document.createElement("p");
    para3.classList.add("landing-page-copy");
    para3.textContent = "Thanks for complying";
    contentDiv.appendChild(para3);
}