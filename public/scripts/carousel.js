'use strict';

/*
* Carousel class
* As generic as possible for the short amount of time. Could be more generic, for example:
* setting src attribute of <img> tag instead of background-image CSS property, constructing the Carousel with less props
*
*/
function Carousel(imageFolder, titleElement, descriptionElement, images, imageElement, navBulletsElement) {

  this.images = images;
  this.imageElement = imageElement;
  this.navBulletsElement = navBulletsElement;
  this.imageFolder = imageFolder;
  this.titleElement = titleElement;
  this.descriptionElement = descriptionElement;

  this.setImageProperties = function(imageElement, index) {
    this.imageElement.style.backgroundImage = 'url('+this.imageFolder + this.images[index].url+')';
    this.imageElement.style.backgroundRepeat = 'no-repeat';
    this.imageElement.style.backgroundSize = 'cover';
    this.imageElement.style.backgroundPosition = 'center';
    this.titleElement.innerHTML = this.images[index].title;
    this.descriptionElement.innerHTML = this.images[index].description;
  }

  this.initImage = function() {
    this.setImageProperties(this.imageElement, 0);
  }

  this.initDots = function() {
    for(let i = 0; i < this.images.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = '&bull;';
      this.navBulletsElement.appendChild(li);
    }
    let firstDot = this.navBulletsElement.firstChild;
    firstDot.classList.add('active');
  }

  this.set = function(elements, target) {
    this.clear();
    let index = elements.indexOf(target);
    this.setImageProperties(this.imageElement, index);
    target.classList.add('active');
  }

  this.clear = function() {
    for(let element of this.getBulletElements()) {
      element.classList.remove('active');
    }
  }

  this.getCurrentImage = function() {
    let style = this.imageElement.currentStyle || window.getComputedStyle(this.imageElement, false);
    return style.backgroundImage.slice(4, -1).replace(/"/g, "").split('/').pop();
  }

  this.getBulletElements = function() {
    return [...this.navBulletsElement.children];
  }

  this.slide = function(direction) {
    let index = this.images.findIndex(element => {
      return element.url === this.getCurrentImage();
    });
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
    this.clear();
    let elements = this.getBulletElements();
    this.set(elements, elements[index]);
  }

  this.initImage();
  this.initDots();

}
