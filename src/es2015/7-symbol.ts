const COLOR = Symbol("Color");
const SHAPE = Symbol("Shape");
console.log(`COLOR_RED: ${ COLOR.toString() }, ${ String(COLOR) }`);
console.log(Symbol("Test") === Symbol("Test"););

const obj = {
  COLOR: "Red",
  [SHAPE]: "Rectangle",
  width: 100,
  "height": 200,
};
console.log(`color: ${ obj.COLOR }, shape: ${ obj[SHAPE] }, width: ${ obj.width }, height: ${ obj.height }`);
console.log(`color: ${ obj["COLOR"] }, shape: ${ obj["SHAPE"] }, width: ${ obj["width"] }, height: ${ obj["height"] }`);
