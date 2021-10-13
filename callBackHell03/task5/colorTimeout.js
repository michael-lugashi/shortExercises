'use strict'

const changeBackgroundColor = (color, time, failure, change)=>{
    let num = Math.floor(Math.random()*10+1)
    setTimeout(()=>{
        if (num > 5) {
            document.body.style.backgroundColor = color
        }
        else {
            failure()
        }
        change()
    }, time)
}

changeBackgroundColor('blue', 2000, notChanged,
    () => {changeBackgroundColor('green', 2000, notChanged, () => {
        changeBackgroundColor('pink', 2000, notChanged, () => {})})})

function notChanged() {
    console.log('your request was rejected ☹')
}