'use strict'
import {getNum1, getNum2, getOperator, setOperator, clearNum2, setNum1} from './calcStorage.js'
import {add, sub, multiply, divide, equals} from './math.js'
import {updateDisplay} from './updateDom'

export function solve(){
    const num1 = Number(getNum1())
    const num2 = Number(getNum2())
    const operator = determineOperator(getOperator())
    
    if (!num1 || !num2 || !operator ) {
        return
    }

    calcSetUp(equals(num1, num2, operator))
}

function calcSetUp(ans) {
    updateDisplay(ans)
    setOperator(null)
    setNum1(ans)
    clearNum2()
}

function determineOperator(op) {
    return op === '+' ? add: op === '-' ? sub: op === 'X' ? multiply: op === '/' ? divide: null
}