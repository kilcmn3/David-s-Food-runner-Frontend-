import React from 'react';

const ReviewForm = (props) => {
  return (
    <div className="review form">
      <form onSubmit={props.handleSubmit}>
        <input type="text" onChange={props.handleChange} placeholder="write your commnets here.." />
        <input type="submit" />
      </form>
    </div>
  )
}

export default ReviewForm