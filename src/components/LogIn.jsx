import React from 'react';
import { Form } from 'react-bootstrap';
import { BUTTON, INPUT, MYFORM } from '../styledcomponent/styles';

const LogIn = (props) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <>
      <MYFORM onSubmit={handleSubmit} className='mx-auto'>
        <Form.Group controlId='formEmail'>
          <Form.Label>User Name :</Form.Label>
          <Form.Control
            name='email'
            type='text'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && 'error'}
          />
          {touched.email && errors.email ? (
            <div className='error-message'>{errors.email}</div>
          ) : null}
        </Form.Group>
        <Form.Group controlId='formPaSSWORD'>
          <Form.Label>Password :</Form.Label>
          <Form.Control
            name='password'
            type='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && 'error'}
          />
          {touched.password && errors.password ? (
            <div className='error-message'>{errors.password}</div>
          ) : null}
        </Form.Group>
        {/*Submit button that is disabled after button is clicked/form is in the process of submitting*/}
        <BUTTON variant='primary' type='submit' disabled={isSubmitting}>
          Sign In
        </BUTTON>
        <a href='/signup'>
          <INPUT variant='primary' type='button'>
            Register
          </INPUT>
        </a>
      </MYFORM>
    </>
  );
};

export default LogIn;
