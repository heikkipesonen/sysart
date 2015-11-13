import React from 'react';
import ContentItem from './ContentItem';

class ContentBlock extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      contentVisible: true,
      title:'',
      content: [],
      items: []
    };
  }

  componentDidMount () {
    if (this.props.src) {
      this.setState({
        contentVisible: this.props.src.visible === undefined ? true : this.props.src.visible,
        title: this.props.src.title,
        content: this.props.src.content,
        items: this.props.src.items
      });
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      contentVisible: newProps.src.visible,
      title: newProps.src.title,
      content: newProps.src.content,
      items: newProps.src.items
    });
  }


  toggleContent = () => {
    this.setState({
      contentVisible: !this.state.contentVisible
    });
  }

  render () {
    let classNames = this.props.className || '';
    classNames += ' content-block';
    classNames += this.state.contentVisible ? ' content-visible' : '';

    return (
      <div className={classNames}>        
        <h3 className="content-title" onClick={this.toggleContent}>{this.state.title}</h3>
        {(()=>{
          if (this.state.contentVisible) {
            return (
              <ContentItem src={this.state.content}></ContentItem>
            )
          }
        })()}

      </div>
    )
  }
}

export default ContentBlock;
