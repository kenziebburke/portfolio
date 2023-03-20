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
        dropDownC.classList.remove('ddShown');
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
        dropDownC.classList.remove('ddShown');
        closeDDA.style.display = 'block';
        openDDA.style.display = 'none';
    }
}

dDIconsA.addEventListener("click", dropDownToggleA);

// EMAIL ATTACHMENT==================================================

const form = document.querySelector('form');

window.onbeforeunload = () => {
    form.reset();
}


// BUTTON ANIM==========================================
const buttonOne = document.querySelector('.buttonOne');
const buttonHoverOne = document.querySelector('.buttonHoverOne');

const buttonTwo = document.querySelector('.buttonTwo');
console.log(buttonTwo)
const buttonHoverTwo = document.querySelector('.buttonHoverTwo');

const buttonThree = document.querySelector('.buttonThree');
const buttonHoverThree = document.querySelector('.buttonHoverThree');

const buttonFour = document.querySelector('.buttonFour');
const buttonHoverFour = document.querySelector('.buttonHoverFour');

const buttonFive = document.querySelector('.buttonFive');
const buttonHoverFive = document.querySelector('.buttonHoverFive');

const buttonSix = document.querySelector('.buttonSix');
const buttonHoverSix = document.querySelector('.buttonHoverSix');

const buttonSeven = document.querySelector('.buttonSeven');
const buttonHoverSeven = document.querySelector('.buttonHoverSeven');

const buttonEight = document.querySelector('.buttonEight');
const buttonHoverEight = document.querySelector('.buttonHoverEight');

const buttonNine = document.querySelector('.buttonNine');
const buttonHoverNine = document.querySelector('.buttonHoverNine');

const buttonTen = document.querySelector('.buttonTen');
const buttonHoverTen = document.querySelector('.buttonHoverTen');

const buttonAnimOne = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverOne.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverOne.classList.remove('hoverAnim');
    }
}

const buttonAnimTwo = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverTwo.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverTwo.classList.remove('hoverAnim');
    }
}

const buttonAnimThree = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverThree.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverThree.classList.remove('hoverAnim');
    }
}

const buttonAnimFour = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverFour.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverFour.classList.remove('hoverAnim');
    }
}

const buttonAnimFive = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverFive.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverFive.classList.remove('hoverAnim');
    }
}

const buttonAnimSix = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverSix.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverSix.classList.remove('hoverAnim');
    }
}

const buttonAnimSeven = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverSeven.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverSeven.classList.remove('hoverAnim');
    }
}

const buttonAnimEight = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverEight.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverEight.classList.remove('hoverAnim');
    }
}

const buttonAnimNine = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverNine.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverNine.classList.remove('hoverAnim');
    }
}

const buttonAnimTen = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverTen.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverTen.classList.remove('hoverAnim');
    }
}

buttonOne.onmouseover = buttonOne.onmouseout = buttonAnimOne;
buttonTwo.onmouseover = buttonTwo.onmouseout = buttonAnimTwo;
buttonThree.onmouseover = buttonThree.onmouseout = buttonAnimThree;
buttonFour.onmouseover = buttonFour.onmouseout = buttonAnimFour;
buttonFive.onmouseover = buttonFive.onmouseout = buttonAnimFive;
buttonSix.onmouseover = buttonSix.onmouseout = buttonAnimSix;
buttonSeven.onmouseover = buttonSeven.onmouseout = buttonAnimSeven;
buttonEight.onmouseover = buttonEight.onmouseout = buttonAnimEight;
buttonNine.onmouseover = buttonNine.onmouseout = buttonAnimNine;
buttonTen.onmouseover = buttonTen.onmouseout = buttonAnimTen;

buttonOne.addEventListener('click', () => {
    el.reset();
})

buttonTwo.addEventListener('click', (b) => {
    buttonTwo.reset();
})
// ANIMATE ON SCROLL==================================================
