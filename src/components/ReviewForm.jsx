import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ReviewForm = (props) => {
  return (
    <Form inline onSubmit={props.handleSubmit}>
      <Form.Label htmlFor='inlineFormInputName2' srOnly>
        Comment
      </Form.Label>
      <Form.Control
        className='mb-2 mr-sm-2'
        id='inlineFormInputName2'
        value={props.comment}
        type='text'
        onChange={props.handleChange}
        placeholder='write your commnets here..'
      />

      <Button type='submit' className='mb-2'>
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;
