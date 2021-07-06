const images = [
    "img_0.jpg",
    "img_1.jfif",
    "img_2.jfif",
]

const chosenimages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenimages}`;

document.body.appendChild(bgImage);

bgImage.id = "bgImage";