import HomeTab from "./home-tab";
import MenuTab from "./menu-tab";
import ContactTab from "./contact-tab";

import './reset.css';
import './style.css';

const content = document.querySelector("#content");

const home = HomeTab();
const menu = MenuTab();
const contact = ContactTab();

content.appendChild(home);
content.appendChild(menu);
content.appendChild(contact);