import Draggable from './Draggable';

class DraggableSlider extends Draggable {
  constructor (surface, element, options) {
    super(surface, element, options);
    console.log(this);
  }

  getNextSliderPosition () {
    let viewCenter = this.options.view / 2;
    return this.options.slideCenters.reduce((prev, curr) => {
      return (Math.abs(curr - this.state.x - viewCenter) < Math.abs(prev - this.state.x - viewCenter) ? curr : prev);
    }) - this.options.view / 2;
  }

  onDragEnd (evt) {
    console.log(this._lastEvent);

    this.setState({
      dragging: false,
      x: this.getNextSliderPosition(),
      animation: 300
    });


    console.log(this.options);
  }
}

export default DraggableSlider;
