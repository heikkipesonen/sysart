require('normalize.css');
require('styles/App.scss');

import React from 'react';
import Menu from './Menu.js';
import Slider from './Slider.js';
import View from './View.js';
import Footer from './Footer.js';
import ContentSection from './ContentSection.js';
import PeopleList from './PeopleList.js';

class AppComponent extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      backgroundImage: null
    };
  }

  componentDidMount () {
    this._viewport = this.refs.view;
    console.log(this._viewport);
  }

  render() {
    return (
      <div className="view-wrapper" ref="view">
        <View scroll={true} className="index has-menu">

            <Slider></Slider>
            <ContentSection src="newsfeed.json"></ContentSection>
            <ContentSection src="careers.json"></ContentSection>

            <PeopleList></PeopleList>

            <Footer></Footer>
        </View>
        <Menu></Menu>
      </div>
    );
  }
}


export default AppComponent;
