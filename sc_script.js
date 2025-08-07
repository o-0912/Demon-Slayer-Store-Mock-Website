const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

registerLink.addEventListener('click', ()=> {
	wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
	wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
	wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
	wrapper.classList.remove('active-popup');
});

menu_btn.addEventListener('click', function () {
	menu_btn.classList.toggle('is-active');
	mobile_menu.classList.toggle('is-active');
});

document.querySelectorAll(".navlink").forEach(n => n.addEventListener('click', () => {
	menu_btn.classList.remove('is-active');
	mobile_menu.classList.remove('is-active');
}))

document.querySelectorAll(".btnLogin-popup").forEach(n => n.addEventListener('click', () => {
	menu_btn.classList.remove('is-active');
	mobile_menu.classList.remove('is-active');
}))


function topFunction() {
  	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
 }
