import HomeTab from "./home-tab";
import MenuTab from "./menu-tab";

import './reset.css';
import './style.css';

const content = document.querySelector("#content");
const home = HomeTab();
const menu = MenuTab();

content.appendChild(home);
content.appendChild(menu);