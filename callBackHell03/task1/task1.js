'use strict'
function rightTriangleCheck(a, b, c) {
    if (sqr(a) + sqr(b) === sqr(c)) {
        console.log('right triangle')
    }
    else {
        console.log('not right triangle')
    }
}
function sqr(num) {
    return multiply(num, num)
}

function multiply(a, b) {
    return a * b
}

// The above functins could be simplified but its what the instructions said to do
rightTriangleCheck(3, 4, 5)
rightTriangleCheck(3, 4, 6)