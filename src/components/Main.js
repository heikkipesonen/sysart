require('normalize.css');
require('styles/App.scss');

import React from 'react';
import View from './View.js';
import ViewBackground from './ViewBackground.js';
import PeopleList from './PeopleList.js';
import MainStore from 'stores/MainStore.js';

class AppComponent extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      backgroundImage: null
    };
  }

  render() {
    return (
      <div>
      <ViewBackground src="images/bg-main.jpg"></ViewBackground>
      <View scroll={true} className="index layout-center">
        <h1 className="text-white">Saatanan saatana</h1>
        <PeopleList></PeopleList>
      </View>
      </div>
    );
  }
}


export default AppComponent;
