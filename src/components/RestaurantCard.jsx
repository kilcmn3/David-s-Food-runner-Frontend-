import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';

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
    <Row className='justify-content-md-center'>
      <Col lg='12'>
        <div onClick={() => props.handleClick(props.restaurant)}>
          <a
            href={`restaurants/${props.restaurant.id}`}
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
              <Card.Img src={photos[0]} style={{ height: '200px' }} />
            </div>
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default RestaurantCard;
