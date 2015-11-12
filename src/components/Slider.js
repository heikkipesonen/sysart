import React from 'react';
import Slide from './Slide.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Slider extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      currentSlide: 0,
      slides: []
    };

  }

  componentDidMount () {
    fetch('slider.json').then((response) => {
      response.json().then((data) => {
        this.setState({
          slides: data.items,
          currentSlide: 0
        });

        this.tick();
      });
    });
  }

  next () {
    this.setState({
      currentSlide: this.state.slides[this.state.currentSlide].next
    });
  }

  prev () {
    this.setState({
      currentSlide: this.state.slides[this.state.currentSlide].prev
    });
  }

  tick () {
    setInterval(() => this.next(), this.props.interval || 8000);
  }

  render () {
    return (
      <ReactCSSTransitionGroup
        transitionName="slider"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>

        <div className="slider">
          <div className="slider-content">
            {
              this.state.slides.map( (slide, index) => {
                let classNames = this.state.currentSlide === index ? 'active' : '';
                return <Slide className={classNames} content={slide} key={index}></Slide>
              })
            }
          </div>
          <div className="slide-indicators">
            {this.state.slides.map((slide, index) => {
              let classNames = 'slide-indicator';
              let slideIsActive = index === this.state.currentSlide;

              classNames = slideIsActive ? classNames += ' active' : classNames;

              return <div key={index} className={classNames}></div>;
            })}
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Slider;
