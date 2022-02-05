import {menu, stateMenu} from './constants.js'

export const activateMenu = () => {
    menu.classList.toggle("active");
    if (stateMenu.children[0].src.includes("assets/icons/hamburger-menu.svg"))
    stateMenu.children[0].src = "assets/icons/close-line.svg";
    else stateMenu.children[0].src = "assets/icons/hamburger-menu.svg";
};
stateMenu.addEventListener("click", activateMenu);  