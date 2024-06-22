import HomeTab from "./home-tab";
import LogoScr from './restaurant-logo.jpg';

import './reset.css';
import './style.css';

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const content = document.querySelector("#content");
const home = HomeTab();

const logoImage = document.createElement("img");

logoImage.src = LogoScr;

logoImage.setAttribute("class", "logo-img");

header.insertBefore(logoImage, nav);
content.appendChild(home);