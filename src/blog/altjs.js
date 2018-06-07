var maxCount = 3;
var baseMessage = 'Hello!';

function Messenger(name) {
  this.name = name;
}
Messenger.prototype.say = function (message, count) {
  for (var i = 1; i <= count; i++) {
    console.log(this.name + " says " + message + " " + i);
  }
}

var messengaer = new Messenger('Script');
messengaer.say(baseMessage, maxCount);
