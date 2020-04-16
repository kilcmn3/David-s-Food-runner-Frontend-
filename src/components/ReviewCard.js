import React from 'react';

const ReviewCard = (props) => {

  const renderButton = () => {
    let div = document.getElementsByClassName("hide")
    if (div.id === localStorage.getItem("userid")) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="review card">
      <ul>
        <li>
          {props.comment}
        </li>
        <div id={localStorage.getItem("userid")} className="hide">
          {renderButton() ? (<button>Delete</button>) : null}
        </div>
      </ul>
    </div>
  )
}

export default ReviewCard