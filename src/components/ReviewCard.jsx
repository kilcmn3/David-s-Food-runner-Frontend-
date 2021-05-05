import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ReviewCard = (props) => {
  const [buttonToggle, setButtonToggle] = useState(false);
  const { id, user_id, comment, user_email, created_at } = props.userComment;
  const _currentUser = parseInt(localStorage.getItem('userid'));

  const _timeStamp = () => {
    const currentDate = parseInt(new Date().valueOf());
    const commentDate = parseInt(new Date(created_at).valueOf());

    return _timeDifference(currentDate, commentDate);
  };

  const handleClick = () => {
    if (_currentUser === user_id) {
      setButtonToggle(!buttonToggle);
    }
  };

  const _timeDifference = (current, previous) => {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsed = current - previous;

    if (elapsed < msPerMinute) {
      const secondOrSeconds = elapsed > 1 ? ' seconds ago' : ' second ago';
      return Math.floor(elapsed / 1000) + secondOrSeconds;
    } else if (elapsed < msPerHour) {
      const minutesOrMinute = elapsed > 1 ? ' minutes ago' : ' minute ago';
      return Math.floor(elapsed / msPerMinute) + minutesOrMinute;
    } else if (elapsed < msPerDay) {
      const hoursOrHour = elapsed > 1 ? ' hours ago' : ' hour ago';
      return Math.floor(elapsed / msPerHour) + hoursOrHour;
    } else if (elapsed < msPerMonth) {
      const daysOrDay = elapsed > 1 ? ' days ago' : 'day ago';
      return 'approximately ' + Math.floor(elapsed / msPerDay) + daysOrDay;
    } else if (elapsed < msPerYear) {
      const monthsOrMonth = elapsed > 1 ? ' months ago' : ' month ago';
      return (
        'approximately ' + Math.floor(elapsed / msPerMonth) + monthsOrMonth
      );
    } else {
      const yearsOrYear = elapsed > 1 ? ' years ago' : ' year ago';
      return 'approximately ' + Math.floor(elapsed / msPerYear) + yearsOrYear;
    }
  };

  return (
    <Card onClick={handleClick}>
      <Card.Header>{user_email}</Card.Header>
      <Card.Body>
        <Card.Text className='h3'>{comment}</Card.Text>

        {buttonToggle ? (
          <Button
            variant='primary'
            type='submit'
            id={id}
            onClick={props.handleDelete}>
            Delete
          </Button>
        ) : (
          ''
        )}
      </Card.Body>
      <Card.Footer className='text-muted'>{_timeStamp()}</Card.Footer>
    </Card>
  );
};

export default ReviewCard;
