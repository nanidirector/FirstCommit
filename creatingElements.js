// Write your code below:
const header = document.querySelector("#header");

const subHeader = document.createElement("h3");
subHeader.textContent = "Buy high quality organic fruits online";
subHeader.style.fontStyle = 'italic';
header.appendChild(subHeader);
const fruitsList = document.querySelector('.fruits');
const para = document.createElement("p");
para.textContent = "Total fruits: 4";
para.id = "fruits-total";
fruitsList.before(para);

