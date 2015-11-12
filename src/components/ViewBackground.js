import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Utils from '../utils/utils.js';

class View extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      ready: false,
      loading: false,
      style: {
        backgroundImage: null
      }
    };

    this._element = null;
  }

  componentDidMount () {
    if (this.props.src) {
      this.setBackgroundImage(this.props.src);
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps.src !== this.state.style.backgroundImage) {
      this.setBackgroundImage(newProps.src);
    }
  }

  setBackgroundImage (src) {

    this.setState({loading: true, ready: false});
    Utils.preloadImage(src).then((image)=> {
      console.log('IMAGE LOADED');
      this.setState({
        style:{
          backgroundImage: 'url(' + image.src + ')'
        },
        loading: false,
        ready: true
      });
    });
  }

  render () {
    let classNames = 'view-background';

    if (this.state.loading) {
      classNames += ' loading';
    }

    if (this.state.ready) {
      classNames += ' ready';
    }

    return (
      <div className={ classNames } style={ this.state.style }>
        { this.props.children }
      </div>
    )
  }
}


export default View;
