'use strict'
const calcInfo = {
    num1: '',
    num2: '',
    operator: null,
}
export function updateNum1(n1, info = calcInfo){
    info.num1 += n1
    console.log(info.num1)
    return info.num1
}

function getnum1(n1 = num1) {
    console.log(n1)
    return Number(n1)
}
function getnum2(n2 = num2) {
    return Number(n2)
}
function setOperator(e){
    calcInfo.operator = e
}
function getOperator(){
    return calcInfo.operator
}