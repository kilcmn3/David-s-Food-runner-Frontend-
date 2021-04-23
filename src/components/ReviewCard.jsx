import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default class ReviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonToggle: false,
    };
  }
  handleClick = (event) => {
    if (event.target.id === localStorage.getItem('userid')) {
      this.setState({ buttonToggle: !this.state.buttonToggle });
    }
    return false;
  };

  render() {
    const { id, user_id, comment, user_email } = this.props.datas;
    return (

        <Form>
          <Form.Group controlId='formBasicEmail'>
            id={id}>
            <Form.Control
              type='comment'
              placeholder='Write Your Comment Here'
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
        {/* <p className='h3' onClick={this.handleClick} id={user_id}>
                  {comment}
                </p>
                <p>
                  <em>comments by: {user_email}</em>
                </p>
                {this.state.buttonToggle ? (
                  <button onClick={this.props.handleDelete}>Delete</button>
                ) : null} */}

    );
  }
}
