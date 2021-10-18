'use strict'
import {updateNum1, setOperator, getOperator, updateNum2, setNum1, clearNum2} from './calcStorage'
import { solve } from './solve';
import { updateDisplay } from './updateDom';
let calculater = document.querySelector(`.container`);
calculater.addEventListener('click', splitEvents)

// I split up the clicks by type of button that was clicked
function splitEvents(event) {
    const value = event.target.value
    const btnType = event.target.name

    // wethaer the operation has been clicked yet decided wether or not I enter data to num1 or num2
    if (btnType === 'int' && !getOperator()) {
        updateNum1(value)
        return
    }
    if (btnType === 'int' && getOperator()) {
        updateNum2(value)
        return
    }

    // this makes it so you can do calculations contiuesly without pressing enter
    if (btnType === 'operator' && getOperator()) {
        solve()
        setOperator(value)
        return
    } else if(btnType === 'operator') {
        setOperator(value)
        updateDisplay('')
        return
    }

    // I solve the equatin using the data that I stored
    if (btnType === 'equal') {
        solve()
        return
    }

    // delete button clears everything
    if (btnType === 'del') {
        updateDisplay('')
        setOperator(null)
        clearNum2()
        setNum1('')
        return
    }
}
