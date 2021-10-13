/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise 
 * @param {function} asyncTransformer 
 */
function flatMapPromise(promise, asyncTransformer){
  return new Promise((resolve, reject) => {
    promise
      .then((result)=> resolve(asyncTransformer(result)))
      .catch((err)=>reject(err));
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise} firstPromise 
 * @param {function} slowAsyncProcess 
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess){
  return firstPromise.then((result)=>slowAsyncProcess(result));
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {function} getUserById 
 * @param {function} getOrganizationById 
 */


function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
  return function getUserByIdWithOrganization(userId) {
    return getUserById(userId).then((userObj) => {
      if (userObj) {
        return getOrganizationById(userObj.organizationId).then(
          (organisationObj) => {
            userObj.organization = organisationObj;
            return userObj;
          }
        );
      }
    });
  };
}


module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};