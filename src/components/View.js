import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class View extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      height: 0,
      classes: ['view','scroll-y'],

      loading: false,
    };

    this._element = null;
  }

  componentDidMount () {
    this.bind(this.refs.viewContainer);
  }

  onScroll = () => {
    this.setState({
      y: this._element.scrollTop,
      x: this._element.scrollLeft
    });
  }

  onTouchStart = () => {
    this.setState({
      height: this._element.scrollHeight
    });
  }


  bind (element) {
    this._element = element;

    this._element.addEventListener('scroll', this.onScroll);
    this._element.addEventListener('touchstart', this.onTouchStart);
    this._element.addEventListener('mousedown', this.onTouchStart);
  }

  componentWillUnmount () {
    this._element.removeEventListener('scroll', this.onScroll);
    this._element.removeEventListener('touchstart', this.onTouchStart);
    this._element.removeEventListener('mousedown', this.onTouchStart);
  }

  render () {
    let classNames = this.props.className + ' ' + this.state.classes.join(' ');
    if (this.state.loading) {
      classNames += 'view-loading';
    }

    return (
      <ReactCSSTransitionGroup transitionName="view" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        <div ref="viewContainer" className={ classNames }>
          { this.props.children }
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}


export default View;
