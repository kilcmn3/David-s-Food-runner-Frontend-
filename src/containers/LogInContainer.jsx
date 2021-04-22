import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as requests from '../containers/requests';
import { CONTAINER } from '../styledcomponent/styles';

import { LogIn } from '../exportComponents';
import MainContainer from './MainContainer';

const LogInContainer = (props) => {
  const [userLogin, setUserLogin] = useState(false);

  const bcrypt = require('bcryptjs');
  const saltRounds = 10;
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup.string().required('No password provided.'),
  });

  return (
    <CONTAINER>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);

          bcrypt.hash(values.password, saltRounds, (err, hash) => {
            requests
              .fetchUser(values.email)
              .then((response) => response.json())
              .then((data) => {
                if (data) {
                  localStorage.setItem('userid', data.id);
                  return props.history.push('/home');
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
          <LogIn
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </Formik>
    </CONTAINER>
  );
};

export default LogInContainer;
