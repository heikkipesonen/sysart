require('normalize.css');
require('styles/App.scss');
require('ionicons/scss/ionicons.scss');

import React from 'react';
// import Mainmenu from './menu/Mainmenu.js';
import Slider from './slider/Slider';
import View from './View.js';
// import Footer from './Footer.js';
import ContentSection from './content/ContentSection.js';
// import PeopleList from './PeopleList.js';

class AppComponent extends React.Component {

  constructor (props) {
    super(props);
  }


  render() {
    return (
      <div className="view-wrapper">

        <View scroll={true} className="index has-menu">
          <Slider></Slider>
        </View>



      </div>
    );
  }
}


export default AppComponent;
