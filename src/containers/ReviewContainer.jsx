import React from 'react';
import { ReviewListContainer, ReviewForm } from '../exportComponents';

const ReviewContainer = (props) => {
  return (
    <div className='review container'>
      <ReviewForm
        comment={props.comment}
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
      />
      <ReviewListContainer
        comments={props.comments}
        handleDelete={props.handleDelete}
      />
    </div>
  );
};

export default ReviewContainer;
