import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
      <Container>
        <Row>
          <Col>
            <Col >
              <div className="review card" id={id}  >
                <p className="h3" onClick={this.handleClick} id={user_id}>{comment}</p>
                <p><em>comments by: {user_email}</em></p>
                {this.state.buttonToggle ? <button onClick={this.props.handleDelete} >Delete</button> : null}
              </div >
            </Col>
          </Col>
        </Row>
      </Container >
    )
  }
}

export default ReviewCard