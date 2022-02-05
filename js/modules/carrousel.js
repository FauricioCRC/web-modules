import {points, rootStyles, listPoints} from './constants.js'

export const moveImagesAccordingPointClicked = (e) =>{
    if(e.target.classList.contains('list-points__item')){
        for (let i = 0; i < points.length; i++){
            points[i].classList.remove('active')
            if(points[i] === e.target){
                e.target.classList.add('active')
                let position = i
                let operation = position * -100 / 3
                rootStyles.setProperty('--slider-translate', `${operation}%`)
            }
        }
    }
}
listPoints.addEventListener('click', (e) => {moveImagesAccordingPointClicked(e)})