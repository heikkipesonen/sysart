import React from 'react';
import Utils from '../utils/utils.js';

class ImageLoader extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      src: null,
      loading: false
    };
  }

  componentDidMount () {
    this.preload(this.props.src);
  }

  componentWillReceiveProps (newProps) {
    this.preload(newProps.src);
  }

  shouldComponentUpdate (newProps, newState) {
    return this.state.src !== newState.src || this.state.loading !== newState.loading;
  }

  preload (src) {
    this.setState({loading: true});
    return Utils.preloadImage(src).then((img) => {
      this.setState({src: img.src, loading: false});
    });
  }

  render () {
    let classNames = this.props.className + ' ' + ['image','animate', this.state.loading ? 'image-loading' : 'image-ready'].join(' ');
    return (
      <div className={classNames}>
        <img src={this.state.src}></img>
      </div>
    );
  }
}

export default ImageLoader;
