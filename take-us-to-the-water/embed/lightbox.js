// Include Lightbox
import PhotoSwipeLightbox from './libs/photoswipe/dist/photoswipe-lightbox.esm.js';
import PhotoSwipe from './libs/photoswipe/dist/photoswipe.esm.js';

import PhotoSwipeVideoPlugin from './libs/photoswipe/plugin/photoswipe-video-plugin.esm.js';

const lightbox = new PhotoSwipeLightbox({
  // may select multiple "galleries"
  gallery: '#gallery-type1-nothumb',

  // Elements within gallery (slides)
  children: 'a',
  initialZoomLevel: 'fit',
  secondaryZoomLevel: 1,
  preloaderDelay: 0,
  // setup PhotoSwipe Core dynamic import
  pswpModule: PhotoSwipe
});

lightbox.on('uiRegister', function() {
  lightbox.pswp.ui.registerElement({
    name: 'custom-caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    html: 'Caption text',
    onInit: (el, pswp) => {
      lightbox.pswp.on('change', () => {
        const currSlideElement = lightbox.pswp.currSlide.data.element;
        let captionHTML = '';
        if (currSlideElement) {
          const hiddenCaption = currSlideElement.querySelector('.pswp-hidden-caption-content');
          if (hiddenCaption) {
            // get caption from element with class hidden-caption-content
            captionHTML = hiddenCaption.innerHTML;
          } else {
            // get caption from alt attribute
            //captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
            captionHTML = currSlideElement.getAttribute('alt') + " | Stelios Kallinikou";
          }
        }
        el.innerHTML = captionHTML || '';
      });
    }
  });
});
lightbox.init();

/* LIGHTBOX THUMBNAILS */

const lightbox2 = new PhotoSwipeLightbox({
  // may select multiple "galleries"
  gallery: '#gallery-type2-thumb a',
  // Elements within gallery (slides)
  //children: 'a',
  initialZoomLevel: 'fit',
  secondaryZoomLevel: 1,
  preloaderDelay: 0,
  // setup PhotoSwipe Core dynamic import
  pswpModule: PhotoSwipe
});
lightbox2.on('uiRegister', function() {
  lightbox2.pswp.ui.registerElement({
    name: 'custom-caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    html: 'Caption text',
    onInit: (el, pswp) => {
      lightbox2.pswp.on('change', () => {
        const currSlideElement = lightbox2.pswp.currSlide.data.element;
        let captionHTML = '';
        if (currSlideElement) {
          const hiddenCaption = currSlideElement.querySelector('.pswp-hidden-caption-content');
          if (hiddenCaption) {
            // get caption from element with class hidden-caption-content
            captionHTML = hiddenCaption.innerHTML;
          } else {
            // get caption from alt attribute
            captionHTML = currSlideElement.querySelector('img').getAttribute('alt') + " | Stelios Kallinikou";
            /*captionHTML = currSlideElement.getAttribute('alt');*/
          }
        }
        el.innerHTML = captionHTML || '';
      });
    }
  });
});
lightbox2.init();

/* END LIGHTBOX THUMBNAILS */

const lightbox3 = new PhotoSwipeLightbox({
  gallery: '#gallery-type-video-0',
  children: 'a',
  pswpModule: PhotoSwipe,

/*
  padding: {
    top: 50,
    bottom: 50,
    left: 0,
    right: 0
  },

  // Recommended PhotoSwipe options for this plugin
  allowPanToNext: false, // prevent swiping to the next slide when image is zoomed
  allowMouseDrag: true, // display dragging cursor at max zoom level
  wheelToZoom: true, // enable wheel-based zoom
  zoom: false // disable default zoom button
*/
});

const videoPlugin = new PhotoSwipeVideoPlugin(lightbox3, {
  // options
});

lightbox3.init();

/*
const lightbox4 = new PhotoSwipeLightbox({
  gallery: '#gallery-type-video-1',
  children: 'a',
  pswpModule: PhotoSwipe,
});

const videoPlugin2 = new PhotoSwipeVideoPlugin(lightbox4, {
});

lightbox4.init();
*/