import React from 'react';
import ImageContainer from './ImageContainer.js';

class PeopleList extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      list: []
    }
  }

  componentDidMount () {
    fetch('people.json').then((response) => {
      response.json().then((data) => {
        this.setState({
          title: data.title,
          text: data.text,
          list: data.items
        });
      });
    })
  }

  render () {
    return (
      <section className="people-list page-section">
        <div className="page-content">
          <div className="section-header">
            <h2 className="section-title">{this.state.title}</h2>
            <p className="section-description">{this.state.text}</p>
          </div>
          { this.state.list.map((person, index) => {
            return (
              <div className="person" key={index}>
                <ImageContainer className="image-person" src={person.image}></ImageContainer>
                <div className="person-info">
                  <h4 className="person-name">{ person.name }</h4>
                  <h5 className="person-title">{ person.title }</h5>
                </div>
              </div>
            );
          }) }
        </div>
      </section>
    )
  }
}

export default PeopleList;
