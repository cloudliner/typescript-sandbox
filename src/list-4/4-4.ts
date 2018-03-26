var scope = 1;
(function() {
  var scope = 2;
  console.log('Inner:', scope);
}());
console.log('Outer: ', scope);
