// Navigation bar

let open = document.querySelector('.navbar--icon');
let menu = document.querySelector('.nav--open');
let close = document.querySelector('.nav--open-icon');
var nav = document.getElementById('nav--sticky');

open.addEventListener('click', function () {
	nav.style.visibility = "hidden";
	menu.classList.toggle('close');

});


close.addEventListener('click', function () {
	nav.style.visibility = "visible";
	menu.classList.toggle('close');
})