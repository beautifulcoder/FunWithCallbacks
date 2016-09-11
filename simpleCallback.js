function receiver(fn) {
  return fn();
}

function callback() {
  return 'foobar';
}

var callbackResponse = receiver(callback);
console.log(callbackResponse);
