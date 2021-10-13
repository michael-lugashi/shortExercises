'use strict'
console.log('first call')

setTimeout(function (){console.log('second call')}, 2000)

console.log('third call')

// the order will be first third second because second gets sent to the callback queue.