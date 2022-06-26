const hmbMenu = document.querySelector('#hmb-menu');
const popUpScreen = document.querySelector('.pop-menu');
const popUpLinks = document.querySelector('.pop-links');
const overlay = document.querySelector('.hero');
const mediaQuery = window.matchMedia('(min-width: 769px)');

hmbMenu.addEventListener("click" , function(){
    if(hmbMenu.classList.contains('open')) {
        hmbMenu.classList.remove('open');
        hmbMenu.classList.remove('hmb-toggle');
        popUpLinks.classList.add('hide');
        popUpLinks.classList.add('fades-out');
        popUpLinks.classList.remove('grid');
        popUpLinks.classList.remove('has-fade');
        popUpScreen.classList.add('hide');
        popUpScreen.classList.add('fades-out');
        popUpScreen.classList.remove('flex');
        popUpScreen.classList.remove('has-fade');
        overlay.classList.remove('overlay');


    } else {
        hmbMenu.classList.add('open');
        hmbMenu.classList.add('hmb-toggle');
        popUpLinks.classList.remove('hide');
        popUpLinks.classList.remove('fades-out');
        popUpLinks.classList.add('grid');
        popUpLinks.classList.add('has-fade');
        popUpScreen.classList.remove('hide');
        popUpScreen.classList.remove('fades-out');
        popUpScreen.classList.add('flex');
        popUpScreen.classList.add('has-fade');
        overlay.classList.add('overlay');
    }
});

function hideOverlay(h) {
    if(h.matches) {
        overlay.classList.remove('overlay');
        hmbMenu.classList.remove('open');
    }
};

mediaQuery.addListener(hideOverlay);
hideOverlay(mediaQuery);
