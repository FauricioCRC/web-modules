import {lightbox, rootStyles, lightboxList, lightboxCloseButton} from './constants.js'

lightboxList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('lightbox-list__image') && !lightbox.classList.contains('active')){
        const IMG_URL = e.target.attributes[0].value
        lightbox.classList.add('active')
        lightbox.children[1].src = IMG_URL;
    }
})
lightboxCloseButton.addEventListener('click', () => {
    lightbox.classList.remove('active')
    rootStyles.setProperty('--lightbox-state', 0)
})