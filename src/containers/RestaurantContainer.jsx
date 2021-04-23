import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Figure } from 'react-bootstrap';
import { ReviewContainer } from '../exportComponents';
import * as requests from './requests';
import { Container, Row, Col } from 'react-bootstrap';

const RestaurantContainer = (props) => {
  const params = useParams();

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    requests
      .fetchOneRest(params.id)
      .then((response) => response.json())
      .then((data) => {
        setComments(data.comments);
        setRestaurant(data);
      });

    requests
      .fetchUserById(localStorage.getItem('userid'))
      .then((response) => response.json())
      .then((user) => setUser(user));
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
                <Figure.Image
                  width={900}
                  height={900}
                  alt='900x900'
                  src={photos[0]}
                />
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

  const handleSubmit = (event) => {
    event.preventDefault();

    let datas = {
      comment: comment,
      user_id: localStorage.getItem('userid'),
      restaurant_id: restaurant.id,
      user_email: user.email,
    };
    requests
      .postComments(datas)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          comments: [...comments, data],
          comment: '',
        });
      });
  };

  const handleDelete = (event) => {
    let id = event.target.parentElement.id;
    let target = comments.map((comment) => comment.id).indexOf(event.target.id);
    let newArr = comments;
    newArr.splice(target, 1);
    this.setState({ comments: newArr });

    requests.deleteComment(id);
  };

  return (
    <>
      <div className='restaurant container'>
        {renderRestaurant()}
        <ReviewContainer
          comment={comment}
          comments={comments}
          handleChange={(e) => setComment(e.target.value)}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default RestaurantContainer;
