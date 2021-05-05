import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as requests from './requests';
import { ReviewCard, ReviewForm } from '../exportComponents';

const ReviewListContainer = (props) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(null);
  const [user, setUser] = useState(null);

  const params = useParams();

  useEffect(() => {
    requests
      .fetchUserById(localStorage.getItem('userid'))
      .then((response) => response.json())
      .then((user) => setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    requests
      .fetchComments(params.id)
      .then((response) => response.json())
      .then((datas) => setComments(datas));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const datas = {
      comment: comment,
      user_id: localStorage.getItem('userid'),
      restaurant_id: props.restaurant.id,
      user_email: user.email,
    };

    requests
      .postComments(datas)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setComment('');
      });
  };

  const handleChange = (e) => {
    setComment(e.currentTarget.value);
  };

  const handleDelete = (e) => {
    const targetId = parseInt(e.currentTarget.id);

    requests
      .deleteComment(targetId)
      .then((response) => response.json())
      .then((data) => setComments(data));
  };

  const renderComment = () => {
    if (comments === null) {
      return <div></div>;
    } else {
      return comments.map((userComment, index) => {
        return (
          <ReviewCard
            key={index}
            userComment={userComment}
            handleDelete={handleDelete}
          />
        );
      });
    }
  };

  return (
    <>
      <ReviewForm
        handleSubmit={handleSubmit}
        comment={comment}
        handleChange={handleChange}
      />
      {renderComment()}
    </>
  );
};

export default ReviewListContainer;
