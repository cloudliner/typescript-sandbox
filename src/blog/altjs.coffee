maxCount = 3;
baseMessage = 'Hello!';

class Messenger
  constructor: (@name) ->
  say: (message, count) ->
    for i in [1..count]
      console.log """#{@name} says #{message} #{i}""";

messengaer = new Messenger 'Script';
messengaer.say baseMessage, maxCount;
