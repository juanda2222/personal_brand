import React from 'react';
import posed from 'react-pose';

import "./ZoomImage.css"

const Frame = posed.div({
  init: {
    applyAtEnd: { display: 'none' },
    opacity: 0
  },
  zoom: {
    applyAtStart: { display: 'block' },
    opacity: 1
  }
});

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99]
};

// hanlers to adjust size a cording to aspect ratio:
const get_width = (image) => {
  let width = image.element.width
  let height = image.element.height
  if (height >= width){
    return "auto"
  } else {
    return "100%"
  }
}
const get_height = (image) => {
  let width = image.element.width
  let height = image.element.height
  if (height >= width){
    return "100%"
  } else {
    return "auto"
  }
}

//handlers to adjust locaition acording to size:
const get_top_distance = (image) => {

  let small_image_width = image.element.width;
  let small_image_height = image.element.height;
  let screen_height = image.element.ownerDocument.body.clientHeight;
  let screen_width = image.element.ownerDocument.body.clientWidth;

  /*
  console.log("screen height: "+screen_height)
  console.log("screen width: "+screen_width)
  console.log("image height: "+image_height)
  console.log("image width: "+image_width)
  */

  //calculate the real size of the big image
  let image_height = (small_image_height / small_image_width) * screen_width
  
  if (small_image_height >= small_image_width){
    return 0
  } else {
    return (screen_height/2 - image_height/2)
  }
}
const get_left_distance = (image) => {

  let small_image_width = image.element.width;
  let small_image_height = image.element.height;
  let screen_height = image.element.ownerDocument.body.clientHeight;
  let screen_width = image.element.ownerDocument.body.clientWidth;
  
  /*
  console.log("screen height: "+screen_height)
  console.log("screen width: "+screen_width)
  console.log("image height: "+image_height)
  console.log("image width: "+image_width)
  */

 //calculate the real size of the big image
  let image_width = (small_image_width / small_image_height) * screen_height

  if (small_image_height >= small_image_width){
    return (screen_width/2 - image_width/2)
  } else {
    return 0
  }
}




const Image = posed.img({
  init: {
    position: 'static',
    width: '100%',
    height: '100%',
    transition,
    flip: true
  },
  zoom: {
    position: 'fixed',
    top: get_top_distance,
    left: get_left_distance,
    right: 0,
    bottom: 0,
    transition,
    flip: true,
    width: get_width,
    height: get_height,
  }
});

class ZoomImgage extends React.Component {
  state = { isZoomed: false };

  zoomIn() {
    window.addEventListener('scroll', this.zoomOut);
    this.setState({ isZoomed: true });
  }

  zoomOut = () => {
    window.removeEventListener('scroll', this.zoomOut);
    this.setState({ isZoomed: false });
  };

  toggleZoom = () => (this.state.isZoomed ? this.zoomOut() : this.zoomIn());

  render() {
    const { isZoomed } = this.state;
    const { imageWidth, imageHeight, ...props } = this.props;
    const pose = isZoomed ? 'zoom' : 'init';

    return (
      <div
        className="zoom_image_div"
        style={{ width: imageWidth, height: imageHeight }}
        onClick={this.toggleZoom}
      >
        <Frame pose={pose} className="behind" />
        <Image pose={pose} {...props} />
      </div>
    );
  }
}

export default ZoomImgage;
