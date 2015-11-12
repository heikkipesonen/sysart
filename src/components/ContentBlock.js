import React from 'react';
import Content from './Content';

class ContentBlock extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      title:'',
      content: [],
      items: []
    };
  }

  componentDidMount () {
    if (this.props.src) {      
      this.setState({
        title: this.props.src.title,
        content: this.props.src.content,
        items: this.props.src.items
      });
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      title: newProps.src.title,
      content: newProps.src.content,
      items: newProps.src.items
    });
  }


  render () {
    return (
      <div className="content-block">
        <h3 className="content-title">{this.state.title}</h3>
          <div className="content-items">
            <Content src={this.state.content}></Content>
          </div>

      </div>
    )
  }
}

export default ContentBlock;
