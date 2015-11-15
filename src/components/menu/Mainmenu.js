import React from 'react';
import Menu from './Menu';

class Mainmenu extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      open: false,
      title: '',
      items: []
    }
  }

  componentDidMount () {
    if (this.props.src) {
      this.loadData(this.props.src);
    }
  }

  componentWillReceiveProps (newProps) {
    if (this.props.src) {
      this.loadData(newProps.src);
    }
  }

  loadData (src) {
    return fetch(src).then((response) => {
      return response.json().then((menu) => {
        this.setState({
          title: menu.title,
          items: menu.items
        });

        return menu;
      });
    });
  }

  toggleMenu = () => {
    this.setState({open: !this.state.open});
  }

  render () {
    let classNames = [this.props.className || '', 'main-menu'];


    classNames.push( this.state.open ? 'open' : 'closed');


    return (
      <nav className={classNames.join(' ')}>
        <div className="menu-bar" onClick={this.toggleMenu}>
          <h4 className="menu-title">{this.state.title}</h4>
        </div>
        <div className="menu-content-wrapper">
          <Menu src={this.state.items}></Menu>
        </div>
      </nav>
    );
  }

}


export default Mainmenu;
