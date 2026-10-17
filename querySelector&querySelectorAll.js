
const mainheading = document.querySelector('#main-heading');
mainheading.style.textAlign = 'right';

const heading = document.querySelector('#basket-heading');
heading.style.color = 'brown';
const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';

fruits.style.listStyleType = 'none';

const basketHeading = document.querySelector('h2');
basketHeading.style.marginLeft = '30px';

const fruitItems = document.querySelectorAll('.fruit');
for (let i = 0; i < fruitItems.length; i++){
    fruitItems[i].style.backgroundColor = 'white';
    fruitItems[i].style.padding = '10px';
    fruitItems[i].style.margin = '10px';
    fruitItems[i].style.borderRadius = '5px';
}
for (let i = 0; i < fruitItems.length; i++){
    if (i % 2 != 0) {
        fruitItems[i].style.backgroundColor = 'brown';
        fruitItems[i].style.color = 'white';
    }
}






// Write answer to the questions asked below:
