import {acordeon, acordeonTitulo} from './constants.js'

const switchAccordionState = (e) => {
    if(e.target.classList.contains('acordeon__title')){
        for(let i = 0; i < acordeonTitulo.length; i++){
            if(acordeonTitulo[i].parentNode.classList.contains('active')){
                acordeonTitulo[i].parentNode.classList.remove('active')
                acordeonTitulo[i].children[0].src = `/assets/icons/triangle-bottom-arrow.svg`
            }
        }
        e.target.parentNode.classList.toggle('active')
        e.target.children[0].src = `/assets/icons/triangle-top-arrow.svg`
    }
}

acordeon.addEventListener('click', (e)=>{switchAccordionState(e)})