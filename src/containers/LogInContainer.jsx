import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';
import * as requests from '../containers/requests';
import { CONTAINER } from '../styledcomponent/styles';
import { LogIn } from '../exportComponents';

const LogInContainer = (props) => {
  const _bcrypt = require('bcryptjs');
  const _saltRounds = 10;
  const _validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup.string().required('No password provided.'),
  });

  return (
    <CONTAINER>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={_validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          let user = false;

          _bcrypt.hash(values.password, _saltRounds, (err, hash) => {
            requests
              .fetchUser(values.email)
              .then((response) => response.json())
              .then((data) => {
                if (data > -1) {
                  localStorage.removeItem('userid');
                  localStorage.clear();
                  localStorage.setItem('userid', data.id);
                  props.updateToken();
                  props.history.push('/home');
                } else {
                  alert('Email or Password is wrong');
                  props.history.push('/');
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

// reference for useing withRouter: https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom
export default withRouter(LogInContainer);
