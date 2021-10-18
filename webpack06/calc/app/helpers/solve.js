'use strict';
import {
  getNum1,
  getNum2,
  getOperator,
  setOperator,
  clearNum2,
  setNum1,
} from './calcStorage.js';
import { add, sub, multiply, divide, equals } from './math.js';
import { updateDisplay } from './updateDom';

export function solve() {
  const num1 = Number(getNum1());
  const num2 = Number(getNum2());
  const operator = determineOperator(getOperator());

  // the equal btn only does something if I have enough data to form an equation
  if (!num1 || !num2 || !operator) {
    return;
  }

  // solves equation
  calcSetUp(equals(num1, num2, operator));
}

// performs the taskes with the answer so the calc is functional an will continue to be
function calcSetUp(ans) {
  updateDisplay(ans);
  setOperator(null);
  setNum1(ans);
  clearNum2();
}

// gives operation function depending on what button was pressed
function determineOperator(op) {
  return op === '+'
    ? add
    : op === '-'
    ? sub
    : op === 'X'
    ? multiply
    : op === '/'
    ? divide
    : null;
}
