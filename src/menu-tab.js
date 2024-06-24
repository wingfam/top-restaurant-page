import Food from "./food-class.js";

const FoodInfoCard = function (object) {
  const card = document.createElement("div");
  const foodImage = document.createElement("img");
  const mainInfo = document.createElement("div");
  const foodName = document.createElement("h2");
  const description = document.createElement("p");
  const price = document.createElement("p");

  card.classList.add("card-wrapper");
  mainInfo.classList.add("main-info");
  foodImage.classList.add("food-img");
  foodName.classList.add("food-name");
  description.classList.add("description");
  price.classList.add("price");

  foodImage.src = object.imgSrc;
  foodName.textContent = object.foodName;
  description.textContent = object.description;
  price.textContent = object.price;

  mainInfo.appendChild(foodName);
  mainInfo.appendChild(description);
  mainInfo.appendChild(price);
  card.appendChild(foodImage);
  card.appendChild(mainInfo);
  
  return card;
};

const MenuTab = function () {
  const menuTab = document.createElement("div");
  const tabTitle = document.createElement("h1");

  menuTab.classList.add("menu-tab");
  tabTitle.classList.add("tab-title");

  tabTitle.textContent = "Menu";

  const bunBoHue = FoodInfoCard(Food.BunBoHue());
  const phoBoKho = FoodInfoCard(Food.PhoBoKho());
  const phoBo = FoodInfoCard(Food.PhoBo());

  menuTab.appendChild(tabTitle);
  menuTab.appendChild(bunBoHue);
  menuTab.appendChild(phoBoKho);
  menuTab.appendChild(phoBo);
  
  return menuTab;
};

export default MenuTab;