// Re-resolve a promise?
// The output is 1.

//Delay with a promise
function delay(ms) {
  let promise = new Promise(function (resolve, reject) {
    resolve(ms);
  });
  return promise;
}

//
