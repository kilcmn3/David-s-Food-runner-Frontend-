import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as requests from '../containers/requests';
import { Form } from 'react-bootstrap';
import { CONTAINER, MYFORM, BUTTON } from '../styledcomponent/styles';

const bcrypt = require('bcryptjs');
const saltRounds = 10;
const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().required('No password provided.'),
});

const LogIn = (props) => {
  return (
    <CONTAINER>
      <h1>David's Food Runner</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);

          bcrypt.hash(values.password, saltRounds, function (err, hash) {
            requests
              .fetchUser(values.email)
              .then((response) => response.json())
              .then((data) => {
                if (data) {
                  localStorage.setItem('userid', data.id);
                  return props.history.push('/MainContainer');
                } else {
                  alert('Email or Password is wrong');
                }
              });
          });
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
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
            <Link to='/signup'>
              <BUTTON variant='primary' type='submit'>
                Register
              </BUTTON>
            </Link>
          </MYFORM>
        )}
      </Formik>
    </CONTAINER>
  );
};

export default LogIn;
