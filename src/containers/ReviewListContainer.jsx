import React, { useState } from 'react';
import * as requests from './requests';
import { ReviewCard, ReviewForm } from '../exportComponents';

const ReviewListContainer = (props) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(
    props.restaurant !== null ? props.restaurant.comments : []
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const copyComments = [...comments];

    copyComments.push(comment);
    setComments(copyComments);

    // const datas = {
    //   comment: comment,
    //   user_id: localStorage.getItem('userid'),
    //   restaurant_id: props.restaurant.id,
    //   user_email: props.user.email,
    // };
    // requests
    //   .postComments(datas)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setComments(data);
    //     setComment('');
    //   });
  };

  const handleChange = (event) => {
    setComment(event.currentTarget.value);
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
    if (comments === null) {
      return <div></div>;
    } else if (comments.length === 1) {
      return <ReviewCard datas={comment} handleDelete={handleDelete} />;
    } else {
      return comments.map((data, index) => {
        return (
          <ReviewCard key={index} datas={data} handleDelete={handleDelete} />
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
