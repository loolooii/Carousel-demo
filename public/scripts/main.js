'use strict';

// Just for the sake of the demo, we create some mock data.
const images = [
  {url: '1.jpg', title: 'title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla turpis a quam aliquet sodales. Quisque elementum ipsum eu interdum iaculis. Nulla posuere ligula id ante pellentesque, eu accumsan elit bibendum. Donec enim metus, feugiat vitae urna vitae, molestie ornare purus. Donec id orci ultrices, pretium dui vitae, vehicula lorem. '},
  {url: '2.jpg', title: 'title 2', description: 'Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.'},
  {url: '3.jpg', title: 'title 3', description: 'Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.'},
  {url: '4.jpg', title: 'title 4', description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit.'}
];
const imageFolder = './images/';
const imgElement = document.getElementById('slide-image');
const navBulletsElement = document.getElementById('slide-dots');
const titleElement = document.getElementById('post-title');
const descriptionElement = document.getElementById('post-desc');

// We create a new Carousel with required data.
// Lots of properties, could be less.
let carousel = new Carousel(imageFolder, titleElement, descriptionElement, images, imgElement, navBulletsElement);

// Change image to the current chosen by bulletpoints
navBulletsElement.onclick = function(event) {
  let bullets = [...this.children];
  carousel.set(bullets, event.target);
}

// Perform sliding when clicking the arrows
function slide(direction) {
  carousel.slide(direction);
}
