import {navbarButtonsTabs, tabsSections} from './constants.js'

export const selectTab = (e) => {
    if (e.target.classList.contains('list__item')){
        for(let i = 0; i < navbarButtonsTabs.length; i++){
            navbarButtonsTabs[i].classList.remove('active')
            tabsSections[i].classList.remove('active')
            if(navbarButtonsTabs[i] === e.target){
                navbarButtonsTabs[i].classList.add('active')
                tabsSections[i].classList.add('active')
            }
        }
    }
}
menu.addEventListener('click', (e) => {selectTab(e)})