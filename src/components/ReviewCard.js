import React, { Component } from 'react';

class ReviewCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonToggle: false
    }
  }
  handleClick = (event) => {
    if (event.target.id === localStorage.getItem("userid")) {
      this.setState({ buttonToggle: !this.state.buttonToggle })
    }
    return false
  }

  render() {
    const { id, user_id, comment, user_email } = this.props.datas
    return (
      <div className="review card" onClick={this.handleClick} >
        <ul id={id} >
          <li className="li" id={user_id}>
            {comment}
            <p>user: {user_email}</p>
          </li>
          {this.state.buttonToggle ? <button onClick={this.props.handleDelete} >Delete</button> : null}
        </ul>
      </div >
    )
  }
}

export default ReviewCard