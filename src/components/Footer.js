import React from 'react';
import ImageContainer from './ImageContainer.js';


class Footer extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <footer className="site-footer">
        <ImageContainer className="footer-background background-holder" src="images/footer.jpg"></ImageContainer>
      </footer>
    )
  }
}

export default Footer;
