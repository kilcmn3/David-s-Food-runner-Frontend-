import React, { Component } from 'react';
import { SearchContainer, NavBar, RestaurantContainer } from '../exportComponents'
import { Redirect, withRouter } from 'react-router-dom';

class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restContToggle: false,
      restaurant: null
    }
  }
  componentDidMount() {
    this.setState({ restContToggle: false })
  }

  handleClick = (restaurant) => {
    this.setState({ restContToggle: !this.state.restContToggle, restaurantId: restaurant.id }, (this.props.history.push({ pathname: `/restaurants/${restaurant.id}` })))
    // if (true) {
    // return (< Redirect to={{ pathname: `/restaurants/${restaurant.id}` }} />)
    // }
  }
  render() {
    return (
      <div className='MainContainer'>
        {!this.state.restContToggle ? <NavBar /> : null}
        {!this.state.restContToggle ? <SearchContainer handleClick={this.handleClick} /> : null}
        {/* {this.state.restContToggle ? <RestaurantContainer restaurantId={this.state.restaurantId} /> : null} */}
      </div>
    );
  }
}

export default withRouter(MainContainer)