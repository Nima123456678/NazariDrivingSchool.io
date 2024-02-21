// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});





//pricing 
const toggleUI = document.getElementById("toggle");
const grid = document.getElementById("grid");

toggleUI.addEventListener("change", (e) => {
  grid.classList.toggle("show-monthly");
});
