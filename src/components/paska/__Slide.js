// import React from 'react';
// import ImageContainer from './ImageContainer.js';
//
// class Slide extends React.Component {
//
//   constructor (props) {
//     super(props);
//
//     this.state = {
//       content: {}
//     };
//   }
//
//   componentDidMount () {
//     this.setState({
//       content: this.props.content ? this.props.content : {}
//     });
//   }
//
//   componentWillReceiveProps (newProps) {
//     this.setState({
//       content: newProps.content ? newProps.content : {}
//     });
//   }
//
//   render () {
//     return (
//       <div className={'slide ' + this.props.className}>
//         <ImageContainer className="slide-background" src={this.state.content.backgroundImage}></ImageContainer>
//         <div className="slide-content"></div>
//       </div>
//     );
//   }
// }
//
// export default Slide;
