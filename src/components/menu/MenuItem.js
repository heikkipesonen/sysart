import React from 'react';
import Menu from './Menu';

class MenuItem extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      open: false,
      height: null
    }
  }

  componentDidMount () {
    this.setState({
      height: this.refs.contentWrapper.offsetHeight
    });
  }

  toggleSubmenu = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render () {
    let classNames = [this.props.className || '', 'menu-item'];

    if (this.props.src.items) {
      classNames.push('has-submenu');
    }

    let delay = this.state.open ? 0 : this.props.order * 40;
    let textDelay = this.state.open ? 0 : this.props.order * 100;

    let style = {
      height: this.state.height + 'px',
      transitionDelay: delay + 'ms'
    };

    let textStyle = {
      transitionDelay: textDelay + 'ms'
    }


    return (
      <li className={classNames.join(' ')}>
        <div className="menu-item-content-wrapper" style={style}>
          <div ref="contentWrapper" className="menu-item-content">
              <h4 className="menu-item-title" style={textStyle}>{this.props.src.title}</h4>
              {(()=>{
                if (this.props.src.content) {
                  return (<p className="menu-item-description" style={textStyle}>{this.props.src.content}</p>)
                }
              })()}

              {(()=>{
                if (this.props.src.items && this.props.src.items.length) {
                  return <div className="submenu-toggle" onClick={this.toggleSubmenu}></div>
                }
              })()}

          </div>
        </div>
        {(()=>{
          if (this.props.src.items && this.props.src.items.length) {
            let subMenuClassNames = ['submenu'];
            subMenuClassNames.push(this.state.open ? 'open' : 'closed');
            return <Menu className={subMenuClassNames.join(' ')} src={this.props.src.items}></Menu>
          }
        })()}
      </li>
    )
  }
}

export default MenuItem;
