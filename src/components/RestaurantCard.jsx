import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';

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
        <div>
          <Link
            to={{ pathname: `restaurants/${props.restaurant.id}` }}
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
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default RestaurantCard;
