import HomeTab from "./home-tab";
import MenuTab from "./menu-tab";
import ContactTab from "./contact-tab";

import "./reset.css";
import "./style.css";

const content = document.querySelector("#content");
const navBtnHome = document.querySelector("nav button:nth-child(1)");
const navBtnMenu = document.querySelector("nav button:nth-child(2)");
const navBtnContact = document.querySelector("nav button:nth-child(3)");

navBtnHome.setAttribute("class", "active");

const home = HomeTab();
const menu = MenuTab();
const contact = ContactTab();

content.appendChild(home);
// content.appendChild(menu);
// content.appendChild(contact);

function switchTab(
  currentTab,
  currentNavBtn,
  otherNavBtn1,
  otherNavBtn2,
  eleRemove1,
  eleRemove2,
  appendEle
) {
  if (currentTab) {
    return;
  } else {
    currentNavBtn.setAttribute("class", "active");
    otherNavBtn1.setAttribute("class", "");
    otherNavBtn2.setAttribute("class", "");
    eleRemove1.remove();
    eleRemove2.remove();
    content.appendChild(appendEle);
  }
}

navBtnHome.addEventListener("click", (event) => {
  const homeTab = document.querySelector(".home-tab");
  switchTab(homeTab, navBtnHome, navBtnMenu, navBtnContact, menu, contact, home);
});

navBtnMenu.addEventListener("click", (event) => {
    const menuTab = document.querySelector(".menu-tab");
    switchTab(menuTab, navBtnMenu, navBtnHome, navBtnContact, home, contact, menu);
});

navBtnContact.addEventListener("click", (event) => {
    const contactTab = document.querySelector(".contact-tab");
    switchTab(contactTab, navBtnContact, navBtnHome, navBtnMenu, home, menu, contact);
});
