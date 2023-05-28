<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>


let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
searchform.classList.toggle('active');
shoppingCart.classList.remove('active');
loginForm.classList.remove('active');
navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
shoppingCart.classList.toggle('active');
searchform.classList.remove('active');
loginForm.classList.remove('active');
navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
loginForm.classList.toggle('active');
searchform.classList.remove('active');
shoppingCart.classList.remove('active');
navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
navbar.classList.toggle('active');
searchform.classList.remove('active');
shoppingCart.classList.remove('active');
loginForm.classList.remove('active');
}

window.onscroll = () =>{
searchform.classList.remove('active');
shoppingCart.classList.remove('active');
loginForm.classList.remove('active');
navbar.classList.remove('active');
} 

var swiper = new Swiper(".catalogs-slider", {
loop:true,
spaceBetween: 20,
autoplay: {
delay: 7500,
disableoninteraction : false,
},
centeredslides : true,
breakpoints: {
0: {
slidesPerView: 1,
},
768: {
slidesPerView: 2,

},
1020: {
slidesPerView: 3,

},
},
});



 