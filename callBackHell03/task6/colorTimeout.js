'use strict'
let count = 0
const changeBackgroundColor = (color, time, failure, change)=>{
    let num = Math.floor(Math.random()*10+1)
    count++
    setTimeout(()=>{
        if (num > 5) {
            document.body.style.backgroundColor = color
            console.log(count)
        }
        else {
            failure(count)
        }
        change()
    }, time)
}

const notChanged = (count) => console.log(`request number ${count} was rejected ☹`)

changeBackgroundColor('blue', 2000, notChanged,
    () => {changeBackgroundColor('green', 2000, notChanged, () => {
        changeBackgroundColor('pink', 2000, notChanged, () => {})})})
