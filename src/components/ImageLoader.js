import React from 'react';
import Utils from './utils.js';

class ImageLoader extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      src: null,
      loading: false
    };
  }

  componentDidMount () {
    this.preload();
  }

  componentWillReceiveProps (nextProps) {
    this.setState({src: nextProps.src});
  }

  preload () {
    this.setState({loading: true});
    return Utils.preloadImage(img.src).then((img) => {
      this.setState({src: img.src, loading: false});
    });
  }

  render () {
    let classNames = ['image-container', this.state.loading ? 'image-loading' : 'image-ready'].join(' ');
    return (
      <div className={classNames}>
        <img src={this.state.src}></img>
      </div>
    );
  }
}

export default ImageLoader;
