'use strict'
import {updateNum1} from './calcStorage'
let calculater = document.querySelector(`.container`);
calculater.addEventListener('click', splitEvents)

function splitEvents(event) {
    const value = event.target.value
    // console.log((Number(value)))
    if (!isNaN(value) || value === '.') {
        // console.log(value)
        updateNum1(value)
        
    }
}
