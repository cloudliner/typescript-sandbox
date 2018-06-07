var maxCount = 3;
var baseMessage = "Hello!";

function Person(name) {
  this.name = name;
}
Person.prototype.say = function (message, count) {
  for (var i = 1; i <= count; i++) {
    console.log(this.name + " says " + message + " " + i);
  }
}

var person = new Person("Bill");
person.say(baseMessage, maxCount);
