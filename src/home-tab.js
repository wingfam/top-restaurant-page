import HeroImage from './bun-pho.jpg';

const HomeTab = function() {
    const homeDiv = document.createElement("div");
    const slogan = document.createElement("h2");
    const homeImg = document.createElement("img");
    const description = document.createElement("p");
    // const imageCredit = document.createElement("p");

    homeDiv.setAttribute("class", "home-div");
    slogan.setAttribute("class", "slogan");
    homeImg.setAttribute("class", "home-image");
    description.setAttribute("class", "description");
    // imageCredit.setAttribute("class", "image-credit");

    slogan.textContent = "Best Vietnamese Noodle in Town!";
    homeImg.src = HeroImage;
    description.textContent = "This restaurant is not a real restaurant, but I bet you it can be the best Vietnames Noodle restaurant in the world!";
    // imageCredit.textContent = "Photo by Vincent Rivaud on pexels.com";

    homeDiv.appendChild(slogan);
    homeDiv.appendChild(homeImg);
    homeDiv.appendChild(description);
    // homeDiv.appendChild(imageCredit);

    return homeDiv;
};

export default HomeTab;