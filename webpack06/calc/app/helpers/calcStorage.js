'use strict'
import { updateDisplay } from "./updateDom"
const calcInfo = {
    num1: '',
    num2: '',
    operator: null,
}
export function updateNum1(n1, info = calcInfo){
    info.num1 += n1
    updateDisplay(info.num1)
    return info.num1
}

export function updateNum2(n2, info = calcInfo){
    info.num2 += n2
    updateDisplay(info.num2)
    return info.num2
}
export function setNum1(n1) {
    calcInfo.num1 = String(n1)
}

export function clearNum2() {
    calcInfo.num2 = ''
}

export function getNum1() {
    return calcInfo.num1
}
export function getNum2() {
    return calcInfo.num2
}
export function setOperator(e){
    calcInfo.operator = e
}
export function getOperator(){
    return calcInfo.operator
}