import HomeTab from "./home-tab";

import './reset.css';
import './style.css';

const content = document.querySelector("#content");
const home = HomeTab();

content.appendChild(home);