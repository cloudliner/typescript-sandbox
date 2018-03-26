function go(callback: (arg: string) => void) {
  callback.apply(this, ['Example Argument']);
}

function callbackFunction(arg: string) {
  console.log(arg);
}

go(callbackFunction);
