const span = document.querySelector("#ano")

var data = new Date();


span.innerHTML = data.getFullYear()

const nav = document.querySelector("nav");

nav.classList.add("navbar-dark")

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-50621360-1');
