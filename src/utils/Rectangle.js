class Rectangle {
  constructor (x,y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  get bounds () {
    return {
      left: this.x,
      top: this.y,
      right: this.right,
      bottom: this.bottom
    }
  }

  get right () {
    return this.x + this.width;
  }

  get bottom () {
    return this.y + this.height;
  }

  intersects (rectangle) {
    return this.right > rectangle.bounds.left && this.left < rectangle.bounds.right && this.bottom > rectangle.bounds.top && this.top < rectangle.bounds.bottom;
  }
}
