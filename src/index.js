import _ from 'lodash';
import { HomePage } from "./home";
import { MenuPage } from "./menu";
import { AboutPage } from "./about";
import "./styles.css";

console.log("Hi");

const home_button = document.querySelector(".home_button");
home_button.addEventListener("click", () => {
    HomePage();
});

const menu_button = document.querySelector(".menu_button");
menu_button.addEventListener("click", () => {
    MenuPage();
});

const about_button = document.querySelector(".about_button");
about_button.addEventListener("click", () => {
    AboutPage();
});


