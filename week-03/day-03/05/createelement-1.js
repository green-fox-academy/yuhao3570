let fox = document.createElement("li");
fox.textContent = "The Green Fox";
document.querySelectorAll(".asteroids").forEach(e => e.appendChild(fox));

let lamp = document.createElement("li");
lamp.textContent = "The Lamplighter";
document.querySelector(".asteroid").appendChild(lamp);

let header = document.createElement("h2");
header.textContent = "I can add elements to the DOM!";
document.querySelector(".container").appendChild(header);

let img = document.createElement("img");
img.setAttribute("src", "../03/puppy.jpg");
document.querySelector(".container").appendChild(img);