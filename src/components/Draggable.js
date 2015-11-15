import _ from 'lodash';

const DEFAULT_OPTIONS = {
  x: true,
  y: true,
  tensionX: 0.3,
  tensionY: 0.3,
  maxX: 0,
  maxY: 0,
  minX: 0,
  minY: 0
};

class Draggable {
  constructor (surface, element, options) {
    this._surface = surface;
    this._element = element;
    this._lastEvent = null;


    this.options = _.defaults({}, options, DEFAULT_OPTIONS);

    this.state = {
      dragging: false,
      x: 0,
      y: 0,
      animation: 0,
      $dirty: true
    }

    this.init();
  }

  init () {
    this._surface.addEventListener('touchstart', this._onDragStart);
    this._surface.addEventListener('touchmove', this._onDrag);
    this._surface.addEventListener('touchend', this._onDragEnd);

    this._surface.addEventListener('mousedown', this._onDragStart);
    document.addEventListener('mousemove', this._onDrag);
    document.addEventListener('mouseup', this._onDragEnd);

    this._element.addEventListener('transitionend', this.animationComplete);

    window.requestAnimationFrame(this.update);
  }

  destroy () {
    this._surface.removeEventListener('touchstart', this._onDragStart);
    this._surface.removeEventListener('touchmove', this._onDrag);
    this._surface.removeEventListener('touchend', this._onDragEnd);

    this._surface.removeEventListener('mousedown', this._onDragStart);
    document.removeEventListener('mousemove', this._onDrag);
    document.removeEventListener('mouseup', this._onDragEnd);

    this._element.removeEventListener('transitionend', this.animationComplete);

    window.cancelAnimationFrame(this.update);
  }

  update = () => {
    if (this.state.$dirty) {
      this._setPosition();
    }

    window.requestAnimationFrame(this.update);
  }

  animationComplete = () => {
    this.setState({
      animation: 0
    });
  }

  _setPosition () {
    this._element.style.transform = 'translate3d(' + this.state.x + 'px, ' + this.state.y + 'px, 0)';
    this._element.style.transitionDuration = this.state.animation ? this.state.animation + 'ms' : '';
    this.state.$dirty = false;
  }

  setState (state) {
    for (let i in state) {
      if (this.state[i] !== state[i]){
        this.state.$dirty = true;
      }
      this.state[i] = state[i];
    }
  }

  getCursor (evt) {
    let pointer = evt.touches ? evt.touches[0] : evt;
    return {
      x: pointer.pageX,
      y: pointer.pageY
    };
  }

  getEventData (evt) {
    let pointer = this.getCursor(evt);
    return {
      x: pointer.x,
      y: pointer.y,
      timeStamp: evt.timeStamp,
      vx: this._lastEvent ? (pointer.x - this._lastEvent.x) / (evt.timeStamp - this._lastEvent.timeStamp) : 0,
      vy: this._lastEvent ? (pointer.y - this._lastEvent.y) / (evt.timeStamp - this._lastEvent.timeStamp) : 0
    }
  }

  setLastEvent (evt) {
    this._lastEvent = this.getEventData(evt);
  }

  _onDragStart = (evt) => {
    this.onDragStart(evt);
  }

  onDragStart (evt) {
    this.setState({
      dragging: true
    });

    this.setLastEvent(evt);
  }

  _onDrag = (evt) => {
    this.onDrag(evt);
  }

  onDrag (evt) {
    if (this.state.dragging){
      let currentEvent = this.getEventData(evt);
      let stepx = currentEvent.x - this._lastEvent.x;
      let stepy = currentEvent.y - this._lastEvent.y;


      if ((this.state.x + stepx > this.options.maxX && stepx > 0) || (this.state.x + stepx < this.options.minX && stepx < 0)){
        stepx = stepx * this.options.tensionX;
      }

      if ((this.state.y + stepy > this.options.maxY && stepy > 0) || (this.state.y + stepy < this.options.minY && stepy < 0)){
        stepy = stepy * this.options.tensionY;
      }

      this.setState({
        x: this.options.x ? this.state.x + stepx : this.state.x,
        y: this.options.y ? this.state.y + stepy : this.state.y,
        animation: 0
      });

      this.setLastEvent(evt);
    }
  }

  _onDragEnd = (evt) => {
    this.onDragEnd(evt);
  }

  onDragEnd (evt) {
    this.setState({
      dragging: false,
      x: 0,
      y: 0,
      animation: 300
    });
  }
}

export default Draggable;
