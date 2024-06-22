import HeroImage from './bun-pho.jpg';

const WorkingHours = function() {
    const workingHrs = ["Monday - Friday: 8am - 8pm", "Saturday: 8am - 4pm", "Sunday: 12pm - 8pm"];
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    const heading = document.createElement("h4");

    div.classList.add("working-hrs");
    heading.classList.add("working-hrs-heading");

    heading.textContent = "Working Hours";

    workingHrs.forEach(item => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = item;
        li.appendChild(p);
        ul.appendChild(li);
    });

    div.appendChild(heading);
    div.appendChild(ul);

    return div;
}

const Address = function() {
    const div = document.createElement("div");
    const heading = document.createElement("h4");
    const p = document.createElement("p");

    div.classList.add("address-text");
    heading.classList.add("address-heading");

    heading.textContent = "Address";
    p.textContent = "123ABC Nowhere Lane, Between River Somewhere & The Highway, Ho Chi Minh city, 700000";

    div.appendChild(heading);
    div.appendChild(p);

    return div;
}

const HomeTab = function() {
    const homeDiv = document.createElement("div");
    const slogan = document.createElement("h2");
    const homeImg = document.createElement("img");
    const description = document.createElement("p");
    const textBox = document.createElement("div");
    const extraInfo = document.createElement("div");
    // const imageCredit = document.createElement("p");

    homeDiv.classList.add("home-tab");
    slogan.classList.add("slogan");
    homeImg.classList.add("home-image");
    description.classList.add("description");
    textBox.classList.add("text-box");
    extraInfo.classList.add("extra-info");
    // imageCredit.setAttribute("class", "image-credit");

    slogan.textContent = "Best Vietnamese Noodle in Town!";
    homeImg.src = HeroImage;
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.";
    // imageCredit.textContent = "Photo by Vincent Rivaud on pexels.com";

    textBox.appendChild(slogan);
    textBox.appendChild(description);
    homeDiv.appendChild(homeImg);
    homeDiv.appendChild(textBox);
    extraInfo.appendChild(WorkingHours());
    extraInfo.appendChild(Address());
    homeDiv.appendChild(extraInfo);
    // homeDiv.appendChild(imageCredit);

    return homeDiv;
};

export default HomeTab;