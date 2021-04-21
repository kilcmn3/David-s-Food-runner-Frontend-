import React, { Component } from 'react';
import { SearchContainer, Navheaders } from '../exportComponents';
import { withRouter } from 'react-router-dom';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restContToggle: false,
      restaurant: null,
    };
  }
  componentDidMount() {
    this.setState({ restContToggle: false });
  }

  handleClick = (restaurant) => {
    this.setState(
      {
        restContToggle: !this.state.restContToggle,
        restaurantId: restaurant.id,
      },
      this.props.history.push({ pathname: `/restaurants/${restaurant.id}` })
    );
  };
  render() {
    return (
      <div className='MainContainer'>
        {!this.state.restContToggle ? <Navheaders /> : null}
        {!this.state.restContToggle ? (
          <SearchContainer handleClick={this.handleClick} />
        ) : null}
      </div>
    );
  }
}

export default withRouter(MainContainer);
