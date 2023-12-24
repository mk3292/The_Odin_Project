export function contact() {
    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren(); // remove any existing DOM elements if present

      //Replace heading
      const heading = document.createElement("h1");
      heading.textContent = "Welcome to Mitch's Restaurant";
      heading.classList.add("landing-title");
      contentDiv.appendChild(heading);

      //DOM for phone number
      const paraPhone = document.createElement("p");
      paraPhone.textContent = "Call us at 206-555-5555";
      paraPhone.classList.add("contact-copy");
      contentDiv.appendChild(paraPhone);

      //DOM for email
      const paraEmail = document.createElement("p");
      paraEmail.textContent = "mk@gmail.com";
      paraEmail.classList.add("contact-copy");
      contentDiv.appendChild(paraEmail);
}