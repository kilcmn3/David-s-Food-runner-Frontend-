import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const RestaurantCard = (props) => {
  let { name, phone, location, photos } = props.restaurant;
  let address =
    JSON.parse(location).address1 +
    ', ' +
    JSON.parse(location).city +
    ' ' +
    JSON.parse(location).state +
    ' ' +
    JSON.parse(location).zip_code;

  return (
    <Container>
      <Row>
        <Col md={12} sm={5}>
          <div onClick={() => props.handleClick(props.restaurant)}>
            <a
              href='#'
              className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
              <div className='flex-column'>
                <h4> {name}</h4>
                <p>
                  <small>
                    <em>{address}</em>
                  </small>
                </p>
                <span className='badge badge-info badge-pill'>{phone}</span>
              </div>
              <div className='image-parent'>
                <img src={photos[0]} className='img-fluid' alt='quixote' />
              </div>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RestaurantCard;
