import React from 'react';

const ReviewCard = (props) => {
  // TODO list all the realted reviews here
  const { comment } = props.comment
  return (
    <div className="review card">
      <ul>
        <li>
          {comment}
        </li>
        <button onClick={props.handleClick}>Delete</button>
      </ul>
    </div>
  )
}

export default ReviewCard