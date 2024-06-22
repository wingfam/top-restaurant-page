import HeroImage from './bun-pho.jpg';

const HomeTab = function() {
    const homeDiv = document.createElement("div");
    const slogan = document.createElement("h2");
    const homeImg = document.createElement("img");
    const description = document.createElement("p");
    const textBox = document.createElement("div");
    // const imageCredit = document.createElement("p");

    homeDiv.setAttribute("class", "home-tab");
    slogan.setAttribute("class", "slogan");
    homeImg.setAttribute("class", "home-image");
    description.setAttribute("class", "description");
    textBox.setAttribute("class", "text-box");
    // imageCredit.setAttribute("class", "image-credit");

    slogan.textContent = "Best Vietnamese Noodle in Town!";
    homeImg.src = HeroImage;
    description.textContent = "This restaurant is not a real restaurant, but I bet you it can be the best Vietnames Noodle restaurant in the world!";
    // imageCredit.textContent = "Photo by Vincent Rivaud on pexels.com";

    textBox.appendChild(slogan);
    textBox.appendChild(description);
    homeDiv.appendChild(homeImg);
    homeDiv.appendChild(textBox);
    // homeDiv.appendChild(imageCredit);

    return homeDiv;
};

export default HomeTab;