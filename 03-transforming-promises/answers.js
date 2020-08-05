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
    promise.then(val => {
      const result = transformer(val);
      if(result){
        resolve(result)
      }
      else{
        reject(result)
      }
    })
    .catch(err => {reject(err)})
  })
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise.then(result =>{
    return new Promise ((resolve, reject) =>{
      if(!isNaN(result)){
        resolve(result*result);
      }
      else{
        reject(`Cannot convert '${result}' to a number!`)
      }
    })
    // if(parseInt(result) !== NaN){
    //   return result*result;
    // }
    // else{
    //   throw `Cannot convert '${result}' to a number!`
    // }
  });
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(() =>{
       return Promise.resolve(0)}
    );
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(res =>{
    throw Promise.reject(res);
  }).catch(err => {
    return err
  });
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