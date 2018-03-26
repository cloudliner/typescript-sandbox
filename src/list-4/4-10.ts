function go(callback: (arg: string) => void) {
  callback('Example Argument');
}

function callbackFunction(arg: string) {
  console.log(arg);
}

go(callbackFunction);
