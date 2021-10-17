'use strict'
import {updateNum1, setOperator, getOperator, updateNum2, setNum1, clearNum2} from './calcStorage'
import { solve } from './solve';
import { updateDisplay } from './updateDom';
let calculater = document.querySelector(`.container`);
calculater.addEventListener('click', splitEvents)

function splitEvents(event) {
    const value = event.target.value
    const btnType = event.target.name
    console.log(btnType)

    if (btnType === 'int' && !getOperator()) {
        return updateNum1(value)
    }
    if (btnType === 'int' && getOperator()) {
        return updateNum2(value)
    }
    // this makes it so you can do calculations contiuesly without pressing enter
    if (btnType === 'operator' && getOperator()) {
        solve()
        setOperator(value)
    } else if(btnType === 'operator') {
        setOperator(value)
        updateDisplay('')
    }
    if (btnType === 'equal') {
        solve()
    }

    if (btnType === 'del') {
        updateDisplay('')
        setOperator(null)
        clearNum2()
        setNum1('')
    }
}
