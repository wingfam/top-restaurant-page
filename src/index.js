import HomeTab from "./home-tab";
import Logo from './restaurant-logo.jpg';

import './reset.css';
import './style.css';

const content = document.querySelector("#content");
const home = HomeTab();

content.appendChild(home);