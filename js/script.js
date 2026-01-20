// toggle navbar for mobile
const burger = document.getElementById('burger');
const navbarMobile = document.getElementById('navbarMobile');

burger.addEventListener('click', ()=>{
    navbarMobile.classList.toggle('hidden')
})