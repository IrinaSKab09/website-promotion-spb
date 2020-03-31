var menuButton = document.querySelector('.menu__button');
var menu = document.querySelector('.menu');

menuButton.addEventListener('click', function() {
  menuButton.classList.toggle('menu__button-active');
  menu.classList.toggle('menu-active');
});