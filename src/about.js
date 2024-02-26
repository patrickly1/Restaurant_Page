import Chef from './Chef.jpeg';

function AboutPage() {
    const containerElement = document.querySelector('#container');
    containerElement.innerHTML = "";

    const contentElement = document.createElement("div");
    contentElement.classList.add("about_content");

    const titleElement = document.createElement("div");
    titleElement.classList.add("about_title");
    titleElement.innerHTML = "Contact Us";

    const founderElement = document.createElement("div");
    founderElement.classList.add("about_founder");
    founderElement.innerHTML = "Founder: Patrick";

    const chefElement = document.createElement("div");
    chefElement.classList.add("about_chef");
    chefElement.innerHTML = "Head Chef: Patrick";

    const washerElement = document.createElement("div");
    washerElement.classList.add("about_washer");
    washerElement.innerHTML = "Dishwasher: NOT Patrick :)";

    const chefpicElement = document.createElement("div");
    chefpicElement.classList.add('about_chef');
    const myChef = new Image();
    myChef.src = Chef;
    chefpicElement.appendChild(myChef);

    contentElement.appendChild(titleElement);
    contentElement.appendChild(founderElement);
    contentElement.appendChild(chefElement);
    contentElement.appendChild(washerElement);
    contentElement.appendChild(chefpicElement);
    containerElement.appendChild(contentElement);
}

export { AboutPage };