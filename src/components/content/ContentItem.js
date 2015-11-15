import React from 'react';


class ContentItem extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      __html:''
    };
  }

  componentDidMount () {
    this.parseContent(this.props.src);
  }

  parseContent (data) {
    if (data instanceof Array){
      data = data.join('</p><p>');
    }

    this.setState({
      __html: '<p>' + data + '</p>'
    });
  }

  shouldComponentUpdate (newProps, newState) {
    return newState.__html !==  this.state.__html;
  }

  componentWillReceiveProps (newProps) {
    this.parseContent(newProps.src);
  }

  render () {
    return (
      <div className={this.props.className || ''} dangerouslySetInnerHTML={this.state}></div>
    )
  }
}

export default ContentItem;
