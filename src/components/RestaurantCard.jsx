import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import { array } from 'yup';

const RestaurantCard = (props) => {
  const { name, phone, location, photos } = props.restaurant;
  const _address =
    JSON.parse(location).address1 +
    ', ' +
    JSON.parse(location).city +
    ' ' +
    JSON.parse(location).state +
    ' ' +
    JSON.parse(location).zip_code;

  const displayPhone = () => {
    return (
      phone.substring(2, 5) +
      ') ' +
      phone.substring(5, 8) +
      ' - ' +
      phone.substring(8)
    );
  };
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
                  <em>{_address}</em>
                </small>
              </p>
              <span className='badge badge-info badge-pill'>
                {displayPhone()}
              </span>
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
