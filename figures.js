function Shape(shape, color1){
  this.shape = shape;
  this.color1= color1;
}

Shape.prototype.draw = function() {
  const newNode = document.createElement('div');
  const container = document.getElementById('shape-container');
  const htmlNode = container.appendChild(newNode);
  const htmlNodeClass = htmlNode.classList.add(`${this.shape}`);
  const borderColor = this.color2 ? `border: 2px solid ${this.color2}` : 'transparent';
  const htmlNodeColor= htmlNode.setAttribute('style', `background-color: ${this.color1}; ${borderColor}`);
  return htmlNodeColor;
}

function ShapeWithBorder(shape, color1, color2){
  Shape.call(this, shape, color1);
  this.color2 = color2;
}

ShapeWithBorder.prototype = Object.create(Shape.prototype)

var circle = new Shape('circle', 'red');
var square = new Shape('square', 'blue');
var circle1 = new ShapeWithBorder('circle', 'pink', '#000');
circle.draw();
square.draw();
circle1.draw();

