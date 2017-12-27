'use strict';

const imgElement = document.getElementById('slide-image');
const images = ['1.jpg', '2.jpg', '4.jpg', '3.jpg'];
const initImage = images[0];
const imageFolder = './images/';
imgElement.src = imageFolder + initImage;

const slideDotsElement = document.getElementById('slide-dots');

// Make bulletpoints as many as there are images
for(let img of images) {
  let li = document.createElement('li');
  li.innerHTML = '&bull;';
  slideDotsElement.appendChild(li);
}

let initChild = slideDotsElement.firstChild;
initChild.classList.add('active');

// Change image to the current chosen by bulletpoints
slideDotsElement.onclick = function(event) {
  let children = [...this.children]

  // carousel.clear(children)
  clearActive(children);

  // carousel.set(childeren, target);
  let index = children.indexOf(event.target);
  imgElement.src = imageFolder + images[index];
  event.target.classList.add('active');
}

// Perform sliding when clicking the arrows
function slide(direction) {
  // carousel.getCurrentImage()
  let currentImg = imgElement.src.split('/').pop();


  let index = images.indexOf(currentImg);

  if(direction === 'next') {
    index++;
    if(index > images.length - 1) {
      index = 0;
    }
  } else {
    index--;
    if(index < 0) {
      index = images.length - 1;
    }
  }
  // carousel.getBulletElements()
  let children = [...slideDotsElement.children];
  clearActive(children);
  imgElement.src = imageFolder + images[index];
  children[index].classList.add('active');
}

// can be removed
function clearActive(elements) {
  for(let element of elements) {
    element.classList.remove('active');
  }
}
