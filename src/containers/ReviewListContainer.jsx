import React, { useState, useEffect } from 'react';

import * as requests from './requests';
import ReviewCard from '../components/ReviewCard';

const ReviewListContainer = (props) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(
    props.restaurant !== null ? props.restaurant.comments : []
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const datas = {
      comment: comment,
      user_id: localStorage.getItem('userid'),
      restaurant_id: props.restaurant.id,
      user_email: props.user.email,
    };
    requests
      .postComments(datas)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setComment('');
      });
  };

  const handleDelete = (event) => {
    let id = event.target.parentElement.id;
    let target = comments.map((comment) => comment.id).indexOf(event.target.id);
    let newArr = comments;
    newArr.splice(target, 1);
    setComments(newArr);

    requests.deleteComment(id);
  };

  const renderComment = () => {
    if (comments !== null) {
      return comments.map((data, index) => {
        return (
          <ReviewCard key={index} datas={data} handleDelete={handleDelete} />
        );
      });
    } else {
      return <div></div>;
    }
  };

  return <>{renderComment()}</>;
};

export default ReviewListContainer;
