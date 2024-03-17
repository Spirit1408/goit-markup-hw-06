let menuButton = document.getElementById('menu-btn');
let menuWindow = document.getElementById('menu-window');
let menuCloseButton = document.getElementById('menu-close-btn');
let mainButton = document.getElementById('main-btn');
let modalWindow = document.getElementById('modal-window');
let modalCloseButton = document.getElementById('modal-close-btn');

menuButton.addEventListener("click", function () {
    menuWindow.classList.toggle("is-open");
});

menuCloseButton.addEventListener("click", function () {
    menuWindow.classList.toggle("is-open");
});

mainButton.addEventListener("click", function () {
    modalWindow.classList.toggle("hidden");
});

modalCloseButton.addEventListener("click", function () {
    modalWindow.classList.toggle("hidden");
});