function go(callback: (arg: string) => void) {
  callback.call(this, 'Example Argument');
}

function callbackFunction(arg: string) {
  console.log(arg);
}

go(callbackFunction);
