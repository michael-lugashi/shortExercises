/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    /* IMPLEMENT ME!! */

    promise
    .then(result=>resolve(transformer(result)))
    .catch(error=>reject(error))
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
// function squarePromise(numberPromise){
//   return numberPromise
//     .then(num=>{
//       if (typeof(num-1) === 'number') {
//        return num*num 
//        } 
//        else {
//         return numberPromise.catch(`Cannot convert '${num}' to a number!`)
//           }
//         // throw new Error(`Cannot convert ${num} to a number!`)
//       })
    
// }
function squarePromise(numberPromise) {
  return numberPromise.then((result) => {
    return new Promise((resolve, reject) => {
      if (!isNaN(result)) {
        resolve(result * result);
      } else {
        reject(`Cannot convert '${result}' to a number!`);
      }
    });
  });
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise).catch(() => 0);
}



/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
 function switcheroo(promise) {
  return promise.then(
    (response) => Promise.reject(response),
    (rejected) => Promise.resolve(rejected)
  );
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};