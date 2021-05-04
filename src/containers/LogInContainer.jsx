import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';
import * as requests from '../containers/requests';
import { CONTAINER } from '../styledcomponent/styles';
import { LogIn } from '../exportComponents';

const LogInContainer = (props) => {
  const bcrypt = require('bcryptjs');
  const saltRounds = 10;
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup.string().required('No password provided.'),
  });
  console.log(props);
  return (
    <CONTAINER>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          let user;

          bcrypt.hash(values.password, saltRounds, (err, hash) => {
            requests
              .fetchUser(values.email)
              .then((response) => response.json())
              .then((data) => {
                if (data !== 1 || data.values !== values.password) {
                  return (user = data);
                }
                alert('Email or Password is wrong');
              });
          });
          if (!user) {
            props.history.push('/home');
            props.updateToken();
          }
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

export default withRouter(LogInContainer);
