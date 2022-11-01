function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFn() {
    
  }
}

function returnsAnAnonymousFunction () {
  return function () {
    
  }
}