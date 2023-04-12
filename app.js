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
const dropDownG = document.querySelector('#galleryDD');
const dDIconsG = document.querySelector('.projectExpandGallery');
const openDDG = document.querySelector('#galleryDDOpen');
const closeDDG = document.querySelector('#galleryDDClose');

const dropDownToggleG = () => {
    if (dropDownG.classList.contains("ddShown"))
    {
        dropDownG.classList.remove('ddShown');
        closeDDG.style.display ='none';
        openDDG.style.display = 'block';
    }
    else{
        dropDownG.classList.add('ddShown'); 
        dropDownT.classList.remove('ddShown');
        dropDownC.classList.remove('ddShown');
        closeDDG.style.display = 'block';
        openDDG.style.display = 'none';
    }
}

dDIconsG.addEventListener("click", dropDownToggleG);

const dropDownT = document.querySelector('#triviaDD');
const dDIconsT = document.querySelector('.projectExpandTrivia');
const openDDT = document.querySelector('#triviaDDOpen');
const closeDDT = document.querySelector('#triviaDDClose');

const dropDownToggleK = () => {
    if (dropDownT.classList.contains("ddShown"))
    {
        dropDownT.classList.remove('ddShown');
        closeDDT.style.display ='none';
        openDDT.style.display = 'block';
    }
    else{
        dropDownT.classList.add('ddShown'); 
        dropDownG.classList.remove('ddShown')
        dropDownC.classList.remove('ddShown');
        closeDDT.style.display = 'block';
        openDDT.style.display = 'none';
    }
}

dDIconsT.addEventListener("click", dropDownToggleK);

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
        dropDownG.classList.remove('ddShown')
        dropDownT.classList.remove('ddShown')
        closeDDC.style.display = 'block';
        openDDC.style.display = 'none';
    }
}

dDIconsC.addEventListener("click", dropDownToggle);
// EMAIL ATTACHMENT==================================================

const form = document.querySelector('form');

window.onbeforeunload = () => {
    form.reset();
}


// BUTTON ANIM==========================================
const buttonOne = document.querySelector('.buttonOne');
const buttonHoverOne = document.querySelector('.buttonHoverOne');

const buttonTwo = document.querySelector('.buttonTwo');
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

buttonOne.addEventListener("focusin", () => {
    buttonHoverOne.classList.add('hoverAnim');
});

buttonOne.addEventListener("focusout", () => {
    buttonHoverOne.classList.add('hoverAnim');
});


const buttonAnimTwo = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverTwo.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverTwo.classList.remove('hoverAnim');
    }
}

buttonTwo.addEventListener("focusin", () => {
    buttonHoverTwo.classList.add('hoverAnim');
});

buttonTwo.addEventListener("focusout", () => {
    buttonHoverTwo.classList.add('hoverAnim');
});

const buttonAnimThree = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverThree.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverThree.classList.remove('hoverAnim');
    }
}

buttonThree.addEventListener("focusin", () => {
    buttonHoverThree.classList.add('hoverAnim');
});

buttonThree.addEventListener("focusout", () => {
    buttonHoverThree.classList.add('hoverAnim');
});

const buttonAnimFour = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverFour.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverFour.classList.remove('hoverAnim');
    }
}

buttonFour.addEventListener("focusin", () => {
    buttonHoverFour.classList.add('hoverAnim');
});

buttonFour.addEventListener("focusout", () => {
    buttonHoverFour.classList.add('hoverAnim');
});

const buttonAnimFive = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverFive.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverFive.classList.remove('hoverAnim');
    }
}

buttonFive.addEventListener("focusin", () => {
    buttonHoverFive.classList.add('hoverAnim');
});

buttonFive.addEventListener("focusout", () => {
    buttonHoverFive.classList.add('hoverAnim');
});

const buttonAnimSix = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverSix.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverSix.classList.remove('hoverAnim');
    }
}

buttonSix.addEventListener("focusin", () => {
    buttonHoverSix.classList.add('hoverAnim');
});

buttonSix.addEventListener("focusout", () => {
    buttonHoverSix.classList.add('hoverAnim');
});

const buttonAnimSeven = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverSeven.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverSeven.classList.remove('hoverAnim');
    }
}

buttonSeven.addEventListener("focusin", () => {
    buttonHoverSeven.classList.add('hoverAnim');
});

buttonSeven.addEventListener("focusout", () => {
    buttonHoverSeven.classList.add('hoverAnim');
});

const buttonAnimEight = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverEight.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverEight.classList.remove('hoverAnim');
    }
}

buttonEight.addEventListener("focusin", () => {
    buttonHoverEight.classList.add('hoverAnim');
});

buttonEight.addEventListener("focusout", () => {
    buttonHoverEight.classList.add('hoverAnim');
});

const buttonAnimNine = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverNine.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverNine.classList.remove('hoverAnim');
    }
}

buttonNine.addEventListener("focusin", () => {
    buttonHoverNine.classList.add('hoverAnim');
});

buttonNine.addEventListener("focusout", () => {
    buttonHoverNine.classList.add('hoverAnim');
});

const buttonAnimTen = (event) => {
    if (event.type == 'mouseover')
    {
        buttonHoverTen.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonHoverTen.classList.remove('hoverAnim');
    }
}

buttonTen.addEventListener("focusin", () => {
    buttonHoverTen.classList.add('hoverAnim');
});

buttonTen.addEventListener("focusout", () => {
    buttonHoverTen.classList.add('hoverAnim');
});

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


// ANIMATE ON SCROLL==================================================
// TBD

const buttonAnimEleven = (event, buttonone) => {
    if (event.type == 'mouseover')
    {
        buttonone.classList.add('hoverAnim');
    }
    if(event.type == 'mouseout'){
        buttonone.classList.remove('hoverAnim');
    }
}

// buttontwo.addEventListener("focusin", () => {
//     buttonone.classList.add('hoverAnim');
// });

// buttontwo.addEventListener("focusout", () => {
//     buttonone.classList.add('hoverAnim');
// });

buttonAnimEleven(buttonOne.onmouseover, buttonOne)