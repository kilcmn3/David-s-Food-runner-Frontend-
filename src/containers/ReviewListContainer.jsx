import React from 'react';
import ReviewCard from '../components/ReviewCard';

const ReviewListContainer = (props) => {
  const renderComment = () => {
    if (props.comments.length > 0) {
      return props.comments.map((data, index) => {
        return (
          <ReviewCard
            key={index}
            datas={data}
            handleDelete={props.handleDelete}
          />
        );
      });
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-sm-8 col-lg-5'>
          <ul className='list-group'>{renderComment()}</ul>
        </div>
      </div>
    </div>
  );
};

export default ReviewListContainer;
