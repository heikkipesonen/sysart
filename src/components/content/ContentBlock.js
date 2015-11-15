import React from 'react';
import ContentItem from './ContentItem';

class ContentBlock extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      contentVisible: true,
    };
  }

  componentDidMount () {
    if (this.props.src) {
      this.setState({
        contentVisible: this.props.src.visible === undefined ? true : this.props.src.visible,
      });
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      contentVisible: newProps.src.visible,
    });
  }


  toggleContent = () => {
    this.setState({
      contentVisible: !this.state.contentVisible
    });
  }

  render () {
    let classNames = [this.props.className || '', 'content-block'];

    if (this.state.contentVisible){
      classNames.push('content-visible');
    }

    return (
      <div className={classNames.join(' ')}>
        <h3 className="content-title" onClick={this.toggleContent}>{this.props.src.title}</h3>
        {(()=>{
          if (this.state.contentVisible) {
            return (
              <ContentItem src={this.props.src.content}></ContentItem>
            )
          }
        })()}

      </div>
    )
  }
}

export default ContentBlock;
