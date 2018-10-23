'use strict';

var mainHeader = document.getElementById('mainHeader');

// Make a constructor function
function Product(filepath, name, seen = 0) {
  this.filepath = filepath;
  this.name = name;
  this.seen = seen;
  Product.allProducts.push(this);
}

//create array to hold  3 products
var productIndex = [];

//Product instances
new Product('images/bag.jpg', 'bag');
new Product('images/banana.jpg', 'banana');
new Product('images/bathroom.jpg', 'bathroom');
new Product('images/boots.jpg', 'boots');
new Product('images/breakfast.jpg', 'breakfast');
new Product('images/bubblegum.jpg', 'bubblegum');
new Product('images/chair.jpg', 'chair');
new Product('images/cthulhu.jpg', 'creature');
new Product('images/dog-duck.jpg', 'dogduck');
new Product('images/dragon.jpg', 'dragon');
new Product('images/pen.jpg', 'pen');
new Product('images/pet-sweep.jpg', 'petsweep');
new Product('images/scissors.jpg', 'scissors');
new Product('images/shark.jpg', 'shark');
new Product('images/sweep.png', 'sweep');
new Product('images/tauntaun.jpg', 'blanket');
new Product('images/unicorn.jpg', 'unicorn');
new Product('images/water-can.jpg', 'watercan');
new Product('images/usb.gif', 'usb');
new Product('images/wine-glass.jpg', 'wineglass');


var product1 = Product.allProducts[0];
var product2 = Product.allProducts[1];
var product3 = Product.allProducts[2];
