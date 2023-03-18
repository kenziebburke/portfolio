// HAMBURGER MENU ==================================================
const navMenu = document.querySelector('.navFlex');
const navIcons = document.querySelector('.navIcons');
const hamIcon = document.querySelector('.fa-bars');
const closeNav = document.querySelector('.fa-times');

const menuToggle = () => {
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

const dropDownToggle = () => {
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

const dropDownToggleK = () => {
    if (dropDownK.classList.contains("ddShown"))
    {
        dropDownK.classList.remove('ddShown');
        closeDDK.style.display ='none';
        openDDK.style.display = 'block';
    }
    else{
        dropDownK.classList.add('ddShown'); 
        dropDownA.classList.remove('ddShown')
        closeDDK.style.display = 'block';
        openDDK.style.display = 'none';
    }
}

dDIconsK.addEventListener("click", dropDownToggleK);


const dropDownA = document.querySelector('#aroraDD');
const dDIconsA = document.querySelector('.projectExpandArora');
const openDDA = document.querySelector('#aroraDDOpen');
const closeDDA = document.querySelector('#aroraDDClose');

const dropDownToggleA = () => {
    if (dropDownA.classList.contains("ddShown"))
    {
        dropDownA.classList.remove('ddShown');
        closeDDA.style.display ='none';
        openDDA.style.display = 'block';
    }
    else{
        dropDownA.classList.add('ddShown'); 
        dropDownK.classList.remove('ddShown');
        closeDDA.style.display = 'block';
        openDDA.style.display = 'none';
    }
}

dDIconsA.addEventListener("click", dropDownToggleA);

// EMAIL ATTACHMENT==================================================
// const userName = document.querySelector('#userName');
// const userEmail = document.querySelector('#userEmail');
// const userMessage = document.querySelector('#message');
// const submitForm = document.querySelector('#submitForm');

// const handleFormClear = () => {

// 	userName.value = '';

// 	userEmail.value = '';

// 	userMessage.value = '';

// }

// submitForm.addEventListener("click", handleFormClear);

const form = document.querySelector('form');

window.onbeforeunload = () => {
    form.reset();
}

// ANIMATE ON SCROLL==================================================
