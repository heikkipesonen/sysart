import React from 'react';


class Slide extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="slide"><h1>{this.props.src.id}</h1></div>
    );
  }
}

export default Slide;
