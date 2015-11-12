import React from 'react';

class Menu extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      open: false,
      items: []
    }
  }

  componentDidMount () {
    fetch('menu.json').then((response) => {
      response.json().then((menuItems) => {
        this.setState({items: menuItems});
      });
    });
  }

  toggleMenu = () => {
    this.setState({open: !this.state.open});
  }

  render () {
    let classNames = 'main-menu';

    if(this.state.open) {
      classNames += ' menu-open';
    }


    return (
      <nav className={classNames}>
        <div className="main-menu-bar" onClick={this.toggleMenu}>
          <div className="nav-toggle"></div>
          <h4 className="main-menu-title">Sysart</h4>
        </div>
        <div className="menu-item-wrapper">
          <ul className="main-menu-items">
          { this.state.items.map((menuItem, index)=> {
              return <li key={index} className="menu-item">
                <h4 className="menu-item-title">{menuItem.title}</h4>
              </li>
          }) }
          </ul>
        </div>
      </nav>
    );
  }

}


export default Menu;
