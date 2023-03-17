// HAMBURGER MENU ==================================================
const navMenu = document.querySelector('.navFlex');
const navIcons = document.querySelector('.navIcons');
const hamIcon = document.querySelector('.fa-bars');
const closeNav = document.querySelector('.fa-times');

const menuToggle = function(){
    if (navMenu.classList.contains("shown"))
    {
        navMenu.classList.remove('shown');
        closeNav.style.display ='none';
        hamIcon.style.display = 'block';
    }
    else{
        navMenu.classList.add('shown'); 
        closeNav.style.display = 'block';
        hamIcon.style.display = 'none';
    }
}

navIcons.addEventListener("click", menuToggle);


// DROP DOWN INFO ==================================================
const dropDownC = document.querySelector('#journalDD');
const dDIconsC = document.querySelector('.projectExpandComfort');
const openDDC = document.querySelector('#journalDDOpen');
const closeDDC = document.querySelector('#journalDDClose');

const dropDownToggle = function(){
    if (dropDownC.classList.contains("ddShown"))
    {
        dropDownC.classList.remove('ddShown');
        closeDDC.style.display ='none';
        openDDC.style.display = 'block';
    }
    else{
        dropDownC.classList.add('ddShown'); 
        closeDDC.style.display = 'block';
        openDDC.style.display = 'none';
    }
}

dDIconsC.addEventListener("click", dropDownToggle);


const dropDownK = document.querySelector('#klosetDD');
const dDIconsK = document.querySelector('.projectExpandKloset');
const openDDK = document.querySelector('#klosetDDOpen');
const closeDDK = document.querySelector('#klosetDDClose');

const dropDownToggleK = function(){
    if (dropDownK.classList.contains("ddShown"))
    {
        dropDownK.classList.remove('ddShown');
        closeDDK.style.display ='none';
        openDDK.style.display = 'block';
    }
    else{
        dropDownK.classList.add('ddShown'); 
        closeDDK.style.display = 'block';
        openDDK.style.display = 'none';
    }
}

dDIconsK.addEventListener("click", dropDownToggleK);

// EMAIL ATTACHMENT==================================================


// ANIMATE ON SCROLL==================================================
