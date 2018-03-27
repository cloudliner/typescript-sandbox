var elements = document.querySelectorAll('#content');
console.log(elements);

var a  = elements[0];
console.log(a);

var b = <HTMLDivElement> elements[0];
console.log(b);
