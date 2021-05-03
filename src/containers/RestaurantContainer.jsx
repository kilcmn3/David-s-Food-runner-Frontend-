import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Col, Figure, Row, Image } from 'react-bootstrap';
import { ReviewListContainer, ReviewForm } from '../exportComponents';
import * as requests from './requests';

const RestaurantContainer = (props) => {
  const [restaurant, setRestaurant] = useState(null);
  const [user, setUser] = useState(null);

  const params = useParams();

  useEffect(() => {
    requests
      .fetchOneRest(params.id)
      .then((response) => response.json())
      .then((data) => {
        setRestaurant(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    requests
      .fetchUserById(localStorage.getItem('userid'))
      .then((response) => response.json())
      .then((user) => setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderRestaurant = () => {
    if (restaurant) {
      const { photos, name, location, categories, phone } = restaurant;
      let parseLocation = JSON.parse(location);
      let alias = JSON.parse(categories[0])['alias'];
      const address =
        parseLocation.address1 +
        ', ' +
        parseLocation.city +
        ' ' +
        parseLocation.state +
        ' ' +
        parseLocation.zip_code;

      return (
        <Container>
          <Row>
            <Col>
              <Figure>
                <Image src={`${photos[0]}`} thumbnail />
                <Figure.Caption>
                  <p>Name: {name}</p>
                  <p>Address: {address}</p>
                  <p>Phone: {phone}</p>
                  <p>category: {alias}</p>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div className='restaurant container'>
        {renderRestaurant()}
        <ReviewForm />
        <ReviewListContainer restaurant={restaurant} user={user} />
      </div>
    </>
  );
};

export default RestaurantContainer;
