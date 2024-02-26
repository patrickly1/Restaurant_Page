import Benny from './Benny.jpeg';
import Soup from './Soup.jpeg';
import Fish from './Fish.jpeg';
import Ribs from './Ribs.jpeg';

function MenuPage() {
    const containerElement = document.querySelector('#container');
    containerElement.innerHTML = "";

    const contentElement = document.createElement("div");
    contentElement.classList.add("menu_content");

    const titleElement = document.createElement("div");
    titleElement.classList.add("menu_title");
    titleElement.innerHTML = "Menu"; 

    const bennyElement = document.createElement("div");
    bennyElement.classList.add("menu_benny");
    bennyElement.innerHTML = "Eggs Benedict"; 
    const myBenny = new Image();
    myBenny.src = Benny;
    bennyElement.appendChild(myBenny);

    const soupElement = document.createElement("div");
    soupElement.classList.add("menu_soup");
    soupElement.innerHTML = "Fish Maw Soup"; 
    const mySoup = new Image();
    mySoup.src = Soup;
    soupElement.appendChild(mySoup);

    const fishElement = document.createElement("div");
    fishElement.classList.add("menu_fish");
    fishElement.innerHTML = "Steamed Fish"; 
    const myFish = new Image();
    myFish.src = Fish;
    fishElement.appendChild(myFish);

    const ribsElement = document.createElement("div");
    ribsElement.classList.add("menu_ribs");
    ribsElement.innerHTML = "Short Ribs"; 
    const myRibs = new Image();
    myRibs.src = Ribs;
    ribsElement.appendChild(myRibs);

    contentElement.appendChild(titleElement);
    contentElement.appendChild(bennyElement);
    contentElement.appendChild(soupElement);
    contentElement.appendChild(fishElement);
    contentElement.appendChild(ribsElement);
    containerElement.appendChild(contentElement);
}

export { MenuPage };