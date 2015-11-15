import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let classNames = [this.props.className || '', 'menu-items'];

    return (
      <ul className={classNames.join(' ')}>
        {this.props.src.map((menuItem, index)=> {
          return <MenuItem key={index} src={menuItem} order={index}></MenuItem>
        })}
      </ul>
    );
  }

}


export default Menu;
