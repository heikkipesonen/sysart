import React from 'react';
import ImageLoader from './ImageLoader.js';

class ImageContainer extends ImageLoader {

  render () {
    let classNames = this.props.className + ' ' + ['image-container','animate', this.state.loading ? 'image-loading' : 'image-ready'].join(' ');
    let style = {
      backgroundImage: this.state.src ? 'url('+this.state.src+')' : ''
    };

    return (
      <div className={classNames} style={style}></div>
    );
  }
}

export default ImageContainer;
