import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ReviewForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group controlId='formInlineName'>
        <Form.Control
          value={props.comment}
          type='text'
          onChange={props.handleChange}
          placeholder='write your commnets here..'
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;
