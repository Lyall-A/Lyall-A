function promisify(func) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      func(...args, (...params) => {
        return resolve(params);
      });
    });
  }
}

module.exports = promisify;
