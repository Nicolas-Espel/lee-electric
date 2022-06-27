const hmbMenu = document.querySelector('#hmb-menu');
const popUpContainer = document.querySelector('.pop-container');
const popUpScreen = document.querySelector('.pop-menu');
const popUpLinks = document.querySelector('.pop-links');
const overlay = document.querySelector('.hero');
const mediaQuery = window.matchMedia('(min-width: 769px)');

//Adds and removes classes once the mobile hamburger menu is clicked, mostly helper classes to animate a smoother pop-up menu
hmbMenu.addEventListener("click" , function(){
    if(hmbMenu.classList.contains('open')) {
        hmbMenu.classList.remove('open');
        hmbMenu.classList.remove('hmb-toggle');
        popUpLinks.classList.add('hide');
        popUpLinks.classList.remove('grid');
        popUpLinks.classList.remove('has-fade');
        popUpScreen.classList.add('hide');
        popUpScreen.classList.remove('flex');
        popUpScreen.classList.remove('has-fade');
        popUpContainer.classList.remove('flex');
        popUpContainer.classList.add('hide');
        overlay.classList.remove('overlay');


    } else {
        hmbMenu.classList.add('open');
        hmbMenu.classList.add('hmb-toggle');
        popUpLinks.classList.remove('hide');
        popUpLinks.classList.add('grid');
        popUpLinks.classList.add('has-fade');
        popUpScreen.classList.remove('hide');
        popUpScreen.classList.add('flex');
        popUpScreen.classList.add('has-fade');
        popUpContainer.classList.add('flex');
        popUpContainer.classList.remove('hide');
        overlay.classList.add('overlay');
    }
});


//Calls JS media query into a function that if the screen size matches query then the overlay will disappear (close overlay on dekstop size if left open)
function hideOverlay(h) {
    if(h.matches) {
        overlay.classList.remove('overlay');
        hmbMenu.classList.remove('open');
    }
};

//calls function into browser upon loading screen
mediaQuery.addListener(hideOverlay);
hideOverlay(mediaQuery);
