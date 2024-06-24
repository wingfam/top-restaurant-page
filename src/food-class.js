import BunBoHueImg from "./bun-bo-hue.jpg";
import PhoBoKhoImg from "./pho-bo-kho.jpg";
import PhoBoImg from "./pho-bo-truyen-thong.jpg";

class Food {
  constructor(imgSrc, foodName, description, price) {
    this.imgSrc = imgSrc;
    this.foodName = foodName;
    this.description = description;
    this.price = price;
  }
}

function BunBoHue () {
  return new Food(
    BunBoHueImg,
    "Bun Bo Hue",
    `A delicious dish with rice noodles, beef, broth, 
      along with pork knuckles, crab sausage, and other toppings. 
      The noodles have a perfect texture from a blend of rice flour 
      and tapioca starch, while the beef comes in cuts like brisket 
      or tenderloin.`,
    "45.000"
  );
};

function PhoBoKho () {
  return new Food(
    PhoBoKhoImg,
    "Pho Bo Kho",
    `A hearty, spicy and aromatic broth with diced beef, carrot 
    and lemongrass. Bò kho can be eaten on its own with a warm 
    baguette for dunking or served over noodles, and is almost 
    always accompanied by half a dozen types of fresh herb.`,
    "50.000"
  );
};

function PhoBo () {
  return new Food(
    PhoBoImg,
    "Pho Bo",
    `A noodle dish consisting of rice noodles, broth, meat and 
    fresh herbs such as scallion, cilantro, and onion. Pho is 
    served in a thick ceramic bowl when the broth is still
    boiling hot, and is sided with some fresh basils, bean 
    sprouts, and a lime wedge.`,
    "40.000"
  );
};

export default { BunBoHue, PhoBoKho, PhoBo };