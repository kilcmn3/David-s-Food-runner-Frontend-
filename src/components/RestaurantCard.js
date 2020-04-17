import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const RestaurantCard = (props) => {
  let { name, phone, location, photos } = props.restaurant
  location = JSON.parse(location)
  let address = location.address1 + ", " + location.city + ' ' + location.state + " " + location.zip_code

  return (
    <Container>
      <Row>
        <Col md={12} sm={5}>
          <div onClick={(event) => props.handleClick(props.restaurant)} >
            < a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" >
              <div className="flex-column">
                <h4> {name}</h4>
                <p><small><em>{address}</em></small></p>
                <span className="badge badge-info badge-pill">{phone}</span>
              </div>
              <div className="image-parent">
                <img src={photos[0]} className="img-fluid" alt="quixote" />
              </div>
            </a>
          </div>
        </Col>
      </Row>
    </Container >
  )
}

export default RestaurantCard

