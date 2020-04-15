import React from 'react';

const ReviewCard = (props) => {
  return (
    <div className="review card">
      <ul>
        <li>
          {props.comment}
        </li>
        <button onClick={props.handleClick}>Delete</button>
      </ul>
    </div>
  )
}

export default ReviewCard