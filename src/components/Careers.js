import React from 'react';
import ImageContainer from './ImageContainer.js';
import ContentBlock from './ContentBlock.js';

class Careers extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      title: '',
      content: [],
      items: []
    }
  }

  componentDidMount () {
    fetch('careers.json').then((response) => {
      response.json().then((data) => {
        console.log(data);
        this.setState({
          title: data.title,
          content: data.content,
          items: data.items
        });
      });
    })
  }

  render () {
    return (
      <section className="page-content careers">
        <div className="section-header">
          <h2 className="section-title">{this.state.title}</h2>
        </div>

        {this.state.items.map((item, index) => {
          console.log(item);
          console.log('---');
          return <ContentBlock src={item} key={index}></ContentBlock>
        })}

      </section>
    )
  }
}

export default Careers;
