const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
let navList = selectElement('.nav-list')

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
    body.classList.toggle('fixed-position');
})
navList.addEventListener('click', function(){
    body.classList.remove('open');
    body.classList.remove('fixed-position');
})

//Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 800,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 800,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 800,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 800,
    distance: '25rem',
    delay: 600
});