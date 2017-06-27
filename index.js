function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function functionName() {

  }
}

function returnsAnAnonymousFunction() {
  return function() {

  }
}
