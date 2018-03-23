class Display {
  name: string = '';
}
class Television extends Display {}
class HiFi {}

var display = new Display();
var television = new Television();
var hiFi = new HiFi();

var isDisplay;

isDisplay = display instanceof Display;

isDisplay = television instanceof Display;

isDisplay = hiFi instanceof Display;
