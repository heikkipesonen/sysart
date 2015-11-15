import React from 'react';
import ImageContainer from '../ImageContainer.js';
import ContentBlock from './ContentBlock.js';

class ContentSection extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      title: '',
      content: [],
      items: []
    }
  }

  componentDidMount () {
    if (this.props.src) {
      this.loadData(this.props.src);
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps.src && newProps.src !== this.props.src) {
      this.loadData(this.props.src);
    }
  }

  setData (data) {
    this.setState({
      title: data.title,
      content: data.content,
      items: data.items
    });
  }

  loadData (src) {
    this.setState({
      loading: true
    });

    return fetch(src).then((response) => {

      this.setState({
        loading: false
      });

      response.json().then((data) => {
        this.setData(data);
        return data;
      });
    });
  }

  render () {
    let classNames = this.props.className || '';
    classNames += ' page-section';

    return (
      <section className={classNames}>
        <div className="page-content">
          <div className="section-header">
            <h2 className="section-title">{this.state.title}</h2>
          </div>

          {this.state.items.map((item, index) => {
            return <ContentBlock src={item} key={index}></ContentBlock>
          })}
        </div>
      </section>
    )
  }
}

export default ContentSection;
