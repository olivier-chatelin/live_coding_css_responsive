const burger = document.getElementById('burger');
const main = document.getElementById('main');
const menu = document.getElementById('menu');

burger.addEventListener('click', function(){
    main.classList.toggle('opaque');
    menu.classList.toggle('d-none');
    menu.classList.toggle('d-flex');
})
