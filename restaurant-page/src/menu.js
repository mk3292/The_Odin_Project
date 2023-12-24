import gimbapPic from './gimbap.jpg';
import dukgukPic from './dukguk.jpg'

export function menu() {
    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren(); // remove any existing DOM elements if present

    //Replace heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Mitch's Restaurant";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    //Menu
    //DOM for gimbap pic
    const gimbap = document.createElement("img");
    gimbap.classList.add("image");
    gimbap.src = gimbapPic;
    gimbap.alt = "Image of gimbap";
    contentDiv.appendChild(gimbap);

    //DOM for gimbap paragraph
    const para1gimbap = document.createElement("p");
    para1gimbap.classList.add("menu-copy");
    para1gimbap.textContent = "Amazing gimbap";
    contentDiv.appendChild(para1gimbap);

    
    const dukguk = document.createElement("img");
    dukguk.classList.add("image");
    dukguk.src = dukgukPic;
    dukguk.alt = "Image of dukguk";
    contentDiv.appendChild(dukguk);

    const para1dukguk = document.createElement("p");
    para1dukguk.classList.add("menu-copy");
    para1dukguk.textContent = "Amazing ddukguk";
    contentDiv.appendChild(para1dukguk);

}