import React from 'react';


class PeopleList extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      list: []
    }
  }

  componentDidMount () {
    fetch('people.json').then((response) => {
      response.json().then((data) => {
        this.setState({
          list: data
        });

        console.log(data);
      });
    })
  }

  render () {
    return (
      <div className="people-list">
        { this.state.list.map((item, index) => {
          return <h4 key={index}>{ item.name } </h4>;
        }) }
      </div>
    )
  }
}

export default PeopleList;
