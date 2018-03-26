var image = document.getElementById('mainImage');
var container = document.getElementById('content');

function updateSize() {
  image.style.width = '50%';
  container.classList.add('highlight');

  var imageHeight = image.offsetHeight;
  var containerHeight = container.offsetHeight;

  return {
    'imageHeight': imageHeight,
    'containerHeight': containerHeight
  };
}

var result = updateSize();
console.log(result);
