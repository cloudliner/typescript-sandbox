class Person
  constructor: (@name) ->
  say: (message, count) ->
    for i in [1..count]
      console.log """#{@name} says #{message} #{i}""";

person = new Person "Bill";
person.say "Hello!", 3;
