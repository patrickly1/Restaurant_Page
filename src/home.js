import KittyKat from "./Kittysnif.jpeg";

function HomePage() {
    const containerElement = document.querySelector('#container');
    containerElement.innerHTML = "";

    const contentElement = document.createElement("div");
    contentElement.classList.add("home_content");

    const picElement = document.createElement("div");
    contentElement.classList.add("kittykat");
    const myKitty = new Image();
    myKitty.src = KittyKat;
    picElement.appendChild(myKitty);

    const titleElement = document.createElement("div");
    titleElement.classList.add("home_title");
    titleElement.innerHTML = "Patrick's HomeMade Kitchen";

    const introElement = document.createElement("div");
    introElement.classList.add("home_intro");
    introElement.innerHTML = "Welcome to Patrick's HomeMade Kitchen!";

    const hoursElement = document.createElement("div");
    hoursElement.classList.add("home_hours");
    hoursElement.innerHTML = "We are open everyday 9am - 9pm!";

    const locationElement = document.createElement("div");
    locationElement.classList.add("home_location");
    locationElement.innerHTML = "123 Main Street, Toronto, ON";

    contentElement.appendChild(picElement);
    contentElement.appendChild(titleElement);
    contentElement.appendChild(introElement);
    contentElement.appendChild(hoursElement);
    contentElement.appendChild(locationElement);
    containerElement.appendChild(contentElement);
}

export { HomePage };