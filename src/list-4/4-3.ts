var scope = 1;
{
  var scope = 2;
  console.log('Inner: ', scope);
}
console.log('Outer: ', scope);
