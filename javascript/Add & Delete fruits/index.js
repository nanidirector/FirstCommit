const L1 = document.querySelectorAll('.fruit');
const form = document.querySelector('form');
const fruit = document.querySelector('.fruits');

L1.forEach((l) => {
    const btn = document.createElement("Button");
    btn.innerText = "edit";
    btn.classList.add("edit-btn");
    l.appendChild(btn);
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fruitToAdd = document.querySelector('#fruit-to-add');
    const newLi = document.createElement('Li');
    newLi.classList.add('fruit');
    newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>' + '<button class="edit-btn">Edit</button>';

    if (fruitToAdd.value.trim() !== "") {
        fruit.appendChild(newLi);
        fruitToAdd.value = "";
    }
});
fruit.addEventListener("click", (event) =>{
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
});