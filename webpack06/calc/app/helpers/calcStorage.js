'use strict';
import { updateDisplay } from './updateDom';

// I stor the data in here
const calcInfo = {
  num1: '',
  num2: '',
  operator: null,
};

// adds digits to the numbers
export function updateNum1(n1) {
  calcInfo.num1 += n1;
  updateDisplay(calcInfo.num1);
  return calcInfo.num1;
}

export function updateNum2(n2) {
  calcInfo.num2 += n2;
  updateDisplay(calcInfo.num2);
  return calcInfo.num2;
}

// lets me either clear or replace numbers with anything
export function setNum1(n1) {
  calcInfo.num1 = String(n1);
}

export function clearNum2() {
  calcInfo.num2 = '';
}

export function setOperator(e) {
  calcInfo.operator = e;
}

// gives me access to the datat I stored
export function getNum1() {
  return calcInfo.num1;
}
export function getNum2() {
  return calcInfo.num2;
}
export function getOperator() {
  return calcInfo.operator;
}
