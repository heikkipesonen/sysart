import React from 'react';
import Slide from './Slide';
import Draggable from '../Draggable';

class Slider extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      currentSlide: 0,
      view: {
        width: 0,
        height: 0
      },
      slides: [
        {
          id: 0,
          title: 'asdf fasrtagt',
          next: 1,
          prev: 2
        },
        {
          id: 1,
          title: 'asdf aerwasdf',
          next: 2,
          prev: 0
        },
        {
          id: 2,
          title: 'fsdag afgdasdf',
          next: 0,
          prev: 1
        }
      ]
    };

    this.options = {
      x: true,
      y: false
    }
  }

  componentDidMount () {
    this.setState({
      view: {
        width: this.refs.slider.offsetWidth,
        height: this.refs.slider.offsetHeight
      }
    });

    this._draggable = new Draggable(this.refs.slider, this.refs.slideContainer, this.options);
    this._draggable.onDragEnd = this.onDragEnd;
    this._sliderOptions = this._draggable.options;
  }

  getSlidePositions () {
    return this.state.slides.map((slide, index) => {
      return this.state.view.width * index - this.state.view.width / 2;
    });
  }

  getNextSliderPosition () {
    let viewCenter = this.state.view.width / 2;
    let slidePositions = this.getSlidePositions();
    let sliderPosition = this._draggable.state.x;
console.log(slidePositions)
    return slidePositions.reduce((prev, curr) => {
      return (Math.abs(curr - sliderPosition - viewCenter) < Math.abs(prev - sliderPosition - viewCenter) ? curr : prev);
    }) - viewCenter;
  }

  onDragEnd = (evt) => {
    this._draggable.setState({
      dragging: false,
      x: this.getNextSliderPosition(),
      animation: 300
    });
  }



  render () {
    if (this._sliderOptions){
      this._sliderOptions.minX = -this.state.view.width;
      this._sliderOptions.maxX = this.state.view.width;
    }

    return (
      <div className="slider" ref="slider">
        <div ref="slideContainer" className="slide-container">
          {this.state.slides.map((slide, index) => {
            return (<Slide key={index} src={slide}></Slide>)
          })}
        </div>
      </div>
    );
  }
}

export default Slider;
